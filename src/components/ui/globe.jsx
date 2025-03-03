"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../data/global.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const initialAspect = window.innerWidth / window.innerHeight;
const cameraZ = 300;

let numbersOfRings = [0];

const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
};

export function Globe({ globeConfig, data }) {
    const [globeData, setGlobeData] = useState(null);
    const globeRef = useRef(null);

    const mergedConfig = { ...defaultProps, ...globeConfig };

    useEffect(() => {
        if (globeRef.current) {
            buildData();
            buildMaterial();
        }
    }, [globeRef.current]);

    const buildMaterial = () => {
        if (!globeRef.current) return;

        const globeMaterial = globeRef.current.globeMaterial();
        globeMaterial.color = new Color(mergedConfig.globeColor);
        globeMaterial.emissive = new Color(mergedConfig.emissive);
        globeMaterial.emissiveIntensity = mergedConfig.emissiveIntensity;
        globeMaterial.shininess = mergedConfig.shininess;
    };

    const buildData = () => {
        const arcs = data;
        let points = [];
        for (let i = 0; i < arcs.length; i++) {
            const arc = arcs[i];
            const rgb = hexToRgb(arc.color);
            points.push({
                size: mergedConfig.pointSize,
                order: arc.order,
                color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.startLat,
                lng: arc.startLng,
            });
            points.push({
                size: mergedConfig.pointSize,
                order: arc.order,
                color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.endLat,
                lng: arc.endLng,
            });
        }

        const filteredPoints = points.filter(
            (v, i, a) =>
                a.findIndex((v2) =>
                    ["lat", "lng"].every((k) => v2[k] === v[k])
                ) === i
        );

        setGlobeData(filteredPoints);
    };

    useEffect(() => {
        if (globeRef.current && globeData) {
            globeRef.current
                .hexPolygonsData(countries.features)
                .hexPolygonResolution(3)
                .hexPolygonMargin(0.7)
                .showAtmosphere(mergedConfig.showAtmosphere)
                .atmosphereColor(mergedConfig.atmosphereColor)
                .atmosphereAltitude(mergedConfig.atmosphereAltitude)
                .hexPolygonColor(() => mergedConfig.polygonColor);
            startAnimation();
        }
    }, [globeData]);

    const startAnimation = () => {
        if (!globeRef.current || !globeData) return;

        globeRef.current
            .arcsData(data)
            .arcStartLat((d) => d.startLat * 1)
            .arcStartLng((d) => d.startLng * 1)
            .arcEndLat((d) => d.endLat * 1)
            .arcEndLng((d) => d.endLng * 1)
            .arcColor((e) => e.color)
            .arcAltitude((e) => e.arcAlt * 1)
            .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
            .arcDashLength(mergedConfig.arcLength)
            .arcDashInitialGap((e) => e.order * 1)
            .arcDashGap(15)
            .arcDashAnimateTime(mergedConfig.arcTime);

        globeRef.current
            .pointsData(data)
            .pointColor((e) => e.color)
            .pointsMerge(true)
            .pointAltitude(0.0)
            .pointRadius(2);

        globeRef.current
            .ringsData([])
            .ringColor((e) => (t) => e.color(t))
            .ringMaxRadius(mergedConfig.maxRings)
            .ringPropagationSpeed(RING_PROPAGATION_SPEED)
            .ringRepeatPeriod(
                (mergedConfig.arcTime * mergedConfig.arcLength) / mergedConfig.rings
            );
    };

    useEffect(() => {
        if (!globeRef.current || !globeData) return;

        const interval = setInterval(() => {
            if (!globeRef.current || !globeData) return;
            numbersOfRings = genRandomNumbers(
                0,
                data.length,
                Math.floor((data.length * 4) / 5)
            );

            globeRef.current.ringsData(
                globeData.filter((d, i) => numbersOfRings.includes(i))
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [globeRef.current, globeData]);

    return (
        <>
            <threeGlobe ref={globeRef} />
        </>
    );
}

export function WebGLRendererConfig() {
    const { gl, size, camera } = useThree();

    useEffect(() => {
        const handleResize = () => {
            gl.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setPixelRatio(window.devicePixelRatio);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [gl, camera]);

    return null;
}

export function World(props) {
    const { globeConfig } = props;
    const scene = new Scene();
    scene.fog = new Fog(0xffffff, 400, 2000);

    const camera = new PerspectiveCamera(50, initialAspect, 180, 1800);
    camera.position.set(100, -100, cameraZ);
    camera.lookAt(new Vector3(0, -100, 0));

    return (
        <Canvas>
            <WebGLRendererConfig />
            <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
            <directionalLight
                color={globeConfig.directionalLeftLight}
                position={new Vector3(-400, 100, 400)}
            />
            <directionalLight
                color={globeConfig.directionalTopLight}
                position={new Vector3(-200, 500, 200)}
            />
            <pointLight
                color={globeConfig.pointLight}
                position={new Vector3(-200, 500, 200)}
                intensity={0.8}
            />
            <Globe {...props} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={cameraZ}
                maxDistance={cameraZ}
                autoRotateSpeed={1}
                autoRotate={true}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI - Math.PI / 3}
            />
        </Canvas>
    );
}

export function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}

export function genRandomNumbers(min, max, count) {
    const arr = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}
