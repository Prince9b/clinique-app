import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export default function MapCart() {
    const mapElement = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapRef.current = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([-1.5339, 12.3714]),
                zoom: 13,
            }),
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.setTarget(null);
            }
        };
    }, []);

    return (
        <div className="w-full min-h-screen p-10">
            <div
                ref={mapElement}
                style={{ width: '100%', height: '400px' }}
                className="rounded-xl overflow-hidden border border-slate-200 shadow-sm"
            ></div>
        </div>
    );
}
