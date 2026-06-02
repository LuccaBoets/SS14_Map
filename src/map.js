import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { getCenter } from 'ol/extent.js';
import { defaults as defaultInteractions } from 'ol/interaction/defaults.js';
import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom.js';
import ImageStatic from 'ol/source/ImageStatic.js';
import Projection from 'ol/proj/Projection.js';
// import hardcore from './assets/Fland-0.png';
import CanvasSource from 'ol/source/ImageCanvas.js';
import ImageLayer from 'ol/layer/Image.js';

function getMapImage(name) {
    return `./src/assets/${name}.png`;
}

const imageWidth = 5536;
const imageHeight = 4480;
const imageExtent = [0, 0, imageWidth, imageHeight];

const projection = new Projection({
    code: 'map-image',
    units: 'pixels',
    extent: imageExtent,
});

const center = getCenter(imageExtent);
// const bg = "https://i.imgur.com/T3W6JsE.png";

const mapLayer = new ImageLayer({
    source: new ImageStatic({
        url: getMapImage('Fland-0'),
        projection: projection,
        imageExtent: imageExtent,
        interpolate: false
    }),
})

const map = new Map({
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
        // bgLayer,
        mapLayer
    ],
    target: 'map',
    view: new View({
        projection,
        center,
        resolution: 4,
    }),
});