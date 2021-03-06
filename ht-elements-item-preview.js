"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/iron-icon";
import "@polymer/paper-icon-button";
import "@01ht/ht-image";
import "@01ht/ht-image-slider";
import "@01ht/ht-animated-image";
import "@01ht/ht-elements-item-youtube-preview";

import { styles } from "@01ht/ht-theme/styles";

class HTElementsItemPreview extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        a,
        a:hover {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        ht-image {
          width: 100%;
        }

        paper-button {
          background: var(--accent-color);
          color: #fff;
        }

        paper-button[disabled] {
          background: #eaeaea;
          color: #a8a8a8;
        }

        paper-button iron-icon {
          margin-right: 8px;
        }

        paper-icon-button {
          padding: 11px !important;
          background: #fff;
          color: var(--secondary-text-color);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin: 0 4px;
        }

        paper-icon-button[selected] {
          color: var(--accent-color);
        }

        #container {
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #media {
          padding-bottom: 56.25%;
          position: relative;
          overflow: hidden;
        }

        #media > * {
          width: 100%;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        #media > [active] {
          display: flex;
        }

        #preview {
          display: flex;
          justify-content: center;
        }

        #actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          padding: 8px 16px;
        }

        #preview-demo,
        #preview-mode {
          margin: 8px 0;
        }

        #preview-mode {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 8px;
        }

        [hidden] {
          display: none;
        }
      `
    ];
  }

  render() {
    const { active, data } = this;
    return html`
    <iron-iconset-svg size="24" name="ht-elements-item-preview">
        <svg>
            <defs>
                <g id="remove-red-eye">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                </g>
                <g id="animated">
                    <path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path>
                </g>
                <g id="youtube" viewBox="0 0 90.677 90.677">
                    <g>
                        <path d="M82.287,45.907c-0.937-4.071-4.267-7.074-8.275-7.521c-9.489-1.06-19.098-1.065-28.66-1.06
                            c-9.566-0.005-19.173,0-28.665,1.06c-4.006,0.448-7.334,3.451-8.27,7.521c-1.334,5.797-1.35,12.125-1.35,18.094
                            c0,5.969,0,12.296,1.334,18.093c0.936,4.07,4.264,7.073,8.272,7.521c9.49,1.061,19.097,1.065,28.662,1.061
                            c9.566,0.005,19.171,0,28.664-1.061c4.006-0.448,7.336-3.451,8.272-7.521c1.333-5.797,1.34-12.124,1.34-18.093
                            C83.61,58.031,83.62,51.704,82.287,45.907z M28.9,50.4h-5.54v29.438h-5.146V50.4h-5.439v-4.822H28.9V50.4z M42.877,79.839h-4.629
                            v-2.785c-1.839,2.108-3.585,3.136-5.286,3.136c-1.491,0-2.517-0.604-2.98-1.897c-0.252-0.772-0.408-1.994-0.408-3.796V54.311
                            h4.625v18.795c0,1.084,0,1.647,0.042,1.799c0.111,0.718,0.462,1.082,1.082,1.082c0.928,0,1.898-0.715,2.924-2.166v-19.51h4.629
                            L42.877,79.839L42.877,79.839z M60.45,72.177c0,2.361-0.159,4.062-0.468,5.144c-0.618,1.899-1.855,2.869-3.695,2.869
                            c-1.646,0-3.234-0.914-4.781-2.824v2.474h-4.625V45.578h4.625v11.189c1.494-1.839,3.08-2.769,4.781-2.769
                            c1.84,0,3.078,0.969,3.695,2.88c0.311,1.027,0.468,2.715,0.468,5.132V72.177z M77.907,67.918h-9.251v4.525
                            c0,2.363,0.773,3.543,2.363,3.543c1.139,0,1.802-0.619,2.066-1.855c0.043-0.251,0.104-1.279,0.104-3.134h4.719v0.675
                            c0,1.491-0.057,2.518-0.099,2.98c-0.155,1.024-0.519,1.953-1.08,2.771c-1.281,1.854-3.179,2.768-5.595,2.768
                            c-2.42,0-4.262-0.871-5.599-2.614c-0.981-1.278-1.485-3.29-1.485-6.003v-8.941c0-2.729,0.447-4.725,1.43-6.015
                            c1.336-1.747,3.177-2.617,5.54-2.617c2.321,0,4.161,0.87,5.457,2.617c0.969,1.29,1.432,3.286,1.432,6.015v5.285H77.907z"/>
                        <path d="M70.978,58.163c-1.546,0-2.321,1.181-2.321,3.541v2.362h4.625v-2.362C73.281,59.344,72.508,58.163,70.978,58.163z"/>
                        <path d="M53.812,58.163c-0.762,0-1.534,0.36-2.307,1.125v15.559c0.772,0.774,1.545,1.14,2.307,1.14
                            c1.334,0,2.012-1.14,2.012-3.445V61.646C55.824,59.344,55.146,58.163,53.812,58.163z"/>
                        <path d="M56.396,34.973c1.705,0,3.479-1.036,5.34-3.168v2.814h4.675V8.82h-4.675v19.718c-1.036,1.464-2.018,2.188-2.953,2.188
                            c-0.626,0-0.994-0.37-1.096-1.095c-0.057-0.153-0.057-0.722-0.057-1.817V8.82h-4.66v20.4c0,1.822,0.156,3.055,0.414,3.836
                            C53.854,34.363,54.891,34.973,56.396,34.973z"/>
                        <path d="M23.851,20.598v14.021h5.184V20.598L35.271,0h-5.242l-3.537,13.595L22.812,0h-5.455c1.093,3.209,2.23,6.434,3.323,9.646
                            C22.343,14.474,23.381,18.114,23.851,20.598z"/>
                        <path d="M42.219,34.973c2.342,0,4.162-0.881,5.453-2.641c0.981-1.291,1.451-3.325,1.451-6.067v-9.034
                            c0-2.758-0.469-4.774-1.451-6.077c-1.291-1.765-3.11-2.646-5.453-2.646c-2.33,0-4.149,0.881-5.443,2.646
                            c-0.993,1.303-1.463,3.319-1.463,6.077v9.034c0,2.742,0.47,4.776,1.463,6.067C38.069,34.092,39.889,34.973,42.219,34.973z
                            M39.988,16.294c0-2.387,0.724-3.577,2.231-3.577c1.507,0,2.229,1.189,2.229,3.577v10.852c0,2.387-0.722,3.581-2.229,3.581
                            c-1.507,0-2.231-1.194-2.231-3.581V16.294z"/>
                    </g>
                </g>
                <g id="image">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                </g>
                <g id="git" viewBox="0 0 97 97">
                  <path fill="var(--secondary-text-color);" d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19
                    c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671
                    c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997
                    c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959
                    c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698
                    L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779
                    C95.021,50.468,95.021,46.719,92.71,44.408z"/>
                </g>
                <g id="slider">
                    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
                </g>
            </defs>
        </svg>
    </iron-iconset-svg>
    <div id="container">
        <section id="media">
            ${
              active === "image"
                ? html`<ht-image .placeholder="${
                    window.appConfig.cloudinary.url
                  }/image/upload/c_scale,f_auto,w_60/v${data.image.version}/${
                    data.image.public_id
                  }.jpg" .image="${
                    window.appConfig.cloudinary.url
                  }/image/upload/c_scale,f_auto,w_1500/v${data.image.version}/${
                    data.image.public_id
                  }.jpg" .size="16x9" .altText="${data.name}"></ht-image>`
                : ""
            }
            ${
              active === "slider"
                ? html`<ht-image-slider .data="${data.slider}" .altText="${
                    data.name
                  }"></ht-image-slider>`
                : ""
            }
            ${
              active === "animated"
                ? html`<ht-animated-image loop .data="${
                    data.animated
                  }"></ht-animated-image>`
                : ""
            }
            ${
              active === "youtube"
                ? html`<ht-elements-item-youtube-preview .data="${
                    data.youtube
                  }" .titleText="${
                    data.name
                  }"></ht-elements-item-youtube-preview>`
                : ""
            }
        </section>
        <section id="actions">
            <div id="preview-demo">
               ${
                 data.demoURL !== ""
                   ? html`<a href="${
                       data.demoURL
                     }" target="_blank" ?hidden="${data.demoURL ===
                       ""}" rel="noopener nofollow">
                <paper-button raised><iron-icon icon="ht-elements-item-preview:remove-red-eye"></iron-icon>Просмотр</paper-button>
            </a>`
                   : html`<paper-button raised disabled><iron-icon icon="ht-elements-item-preview:remove-red-eye"></iron-icon>Просмотр</paper-button>`
               }
            </div>
            <div id="preview-mode">
                ${
                  Object.keys(data.youtube).length > 0
                    ? html`<paper-icon-button id="youtube" ?selected="${active ==
                        "youtube"}" icon="ht-elements-item-preview:youtube" @click=${e => {
                        this._changeActive("youtube");
                      }} ?hidden="${data.videoId ===
                        ""}" aria-label="Предпросмотр YouTube"></paper-icon-button>`
                    : ""
                }
                ${
                  Object.keys(data.animated).length > 0
                    ? html`<paper-icon-button id="animated" ?selected="${active ==
                        "animated"}" icon="ht-elements-item-preview:animated" @click=${e => {
                        this._changeActive("animated");
                      }} aria-label="Предпросмотр Анимация"></paper-icon-button>`
                    : ""
                }
                ${
                  Object.keys(data.slider).length > 0
                    ? html`<paper-icon-button id="slider" ?selected="${active ==
                        "slider"}" icon="ht-elements-item-preview:slider" @click=${e => {
                        this._changeActive("slider");
                      }} aria-label="Предпросмотр Слайдер изображений"></paper-icon-button>`
                    : ""
                }
                <paper-icon-button id="image" ?selected="${active ==
                  "image"}" icon="ht-elements-item-preview:image" @click=${e => {
      this._changeActive("image");
    }} aria-label="Предпросмотр Изображение"></paper-icon-button>
                ${
                  data.repositoryURL !== ""
                    ? html`<a href="${
                        data.repositoryURL
                      }" target="_blank" rel="noopener nofollow">
                    <paper-icon-button id="git" icon="ht-elements-item-preview:git"></paper-icon-button>
                </a>`
                    : null
                }
            </div>
        </section>
    </div>
`;
  }

  static get properties() {
    return {
      active: { type: String },
      data: { type: Object }
    };
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has("data")) {
      if (this.data === undefined || Object.keys(this.data).length === 0)
        return false;
      this.active = this.data.previewMode;
    }
    return true;
  }

  _changeActive(value) {
    this.active = value;
  }
}

customElements.define("ht-elements-item-preview", HTElementsItemPreview);
