import React from "react";
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

import photography_self from './Assets/hobbies/photography_self.jpg';
import photography_bwport from './Assets/hobbies/photography_bwport.JPG';
import photography_window from './Assets/hobbies/photography_window.jpg';
import scuba_photo from './Assets/hobbies/scuba.JPG';
import scuba_video from './Assets/hobbies/scuba_video.mp4';
import squash_photo from './Assets/hobbies/squash_photo.JPG';
import brighton_trip from './Assets/hobbies/brighton_trip.mov';

function HobbiesPage() {
    const items = [
            { // Image item:
                    itemId: 'photography_self',
                    mediaUrl: photography_self,
                    metaData: {
                            type: 'image',
                            height: 100,
                            width: 50,
                            title: 'Film Photography',
                            description: 'self-portrait c2019',
                            focalPoint: [0, 0],
                    }
            },
            { // Another Image item:
                    itemId: "photography_bwport",
                    mediaUrl: photography_bwport,
                    metaData: {
                            type: 'image',
                            height: 40,
                            width: 100,
                            title: 'Film Photography',
                            description: 'not always black and white',
                            focalPoint: [0, 0],
                    }
            },
            { // Video item:
                    itemId: "brighton_trip",
                    mediaUrl: brighton_trip,
                    metaData: {
                            type: 'video',
                            height: 57,
                            width: 100,
                            title: 'Travel Videos',
                            description: 'Trip to Brighton 2020',
                            focalPoint: [0, 0],
                    }
            },
            { // Another Image item:
                    itemId: "photography_window",
                    mediaUrl: photography_window,
                    metaData: {
                            type: 'image',
                            height: 100,
                            width: 80,
                            title: 'Film Photography',
                            description: 'above the clouds',
                            focalPoint: [0, 0],
                    }
            },
            { // Another Image item:
                    itemId: "scuba_photo",
                    mediaUrl: scuba_photo,
                    metaData: {
                            type: 'image',
                            height: 100,
                            width: 50,
                            title: 'Scuba Diving',
                            description: 'Jeju Island 2020',
                            focalPoint: [0, 0],
                    }
            },
            { // Video item:
                    itemId: "scuba_video",
                    mediaUrl: scuba_video,
                    metaData: {
                            type: 'video',
                            height: 57,
                            width: 100,
                            title: 'Scuba Diving',
                            description: 'Jeju Island 2017',
                            focalPoint: [0, 0],
                    }
            },/*
            { // HTML item:
                    itemId: 'htmlItem',
                    html: "<div style='width: 200px; height: 50px; background:blue;'>Midnight Library</div>",
                    metadata: {
                            type: "text",
                            height: 50,
                            width: 200,
                            title: 'sample-title',
                            description: 'sample-description',
                            backgroundColor: 'blue'
                    },

            },
            { // HTML item:
                    itemId: 'htmlItem',
                    html: "<div style='width: 200px; height: 50px; background:white;'>Spring Snow</div>",
                    metadata: {
                            type: "text",
                            height: 50,
                            width: 200,
                            title: 'sample-title',
                            description: 'sample-description',
                            backgroundColor: 'white'
                    },

            },
            { // HTML item:
                    itemId: 'htmlItem',
                    html: "<div style='width: 200px; height: 50px; background:purple;'>All my friends are superheroes</div>",
                    metadata: {
                            type: "text",
                            height: 50,
                            width: 200,
                            title: 'sample-title',
                            description: 'sample-description',
                            backgroundColor: 'purple'
                    },

            },*/
            { // Another Image item:
                    itemId: "squash_photo",
                    mediaUrl: squash_photo,
                    metaData: {
                            type: 'image',
                            height: 50,
                            width: 100,
                            title: 'Squash',
                            description: 'Imperial Varsity 2019',
                            focalPoint: [0, 0],
                    }
            },

    ]


    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: -1,
      collageDensity: 1,
      imageMargin: 0,
      scrollAnimation: 'FADE_IN',
      scrollDirection: 1,
      videoSound: false,
      videoPlay: 'auto',
      overlayAnimation: 'FADE_IN',
    };

    const customHoverRenderer = (itemProps) => (
      <div class="hover-info">
          <p class="hover-info-title">{itemProps.title}</p>
          <p>{itemProps.description}</p>
      </div>

    );

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData});

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;
  return (
    <div id="hobbiesPage">
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
        customHoverRenderer={customHoverRenderer}
      />
    </div>
  )
}

export default HobbiesPage;
