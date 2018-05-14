"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/lib/repeat.js";
// import "@polymer/iron-icon";
// import "ht-chip";
class HTElementsItemBlockTags extends LitElement {
  _render({ items }) {
    return html`
      <style>
        :host {
            display: block;
            position: relative;
            box-sizing: border-box;
        }

        #container {
            display: flex;
            flex-wrap: wrap;
            margin-top:16px;
        }

        a {
            margin-right: 8px;
            margin-bottom: 8px;
          }
      </style>
      <div id="container">
          ${repeat(
            items,
            item => html`<a class="item" href="/catalog?tags=${item.name.toLowerCase()}"> 
              <ht-chip label=${item.name} shadow></ht-chip>
            </a>`
          )}
      </div>
      
`;
  }

  static get is() {
    return "ht-elements-item-block-tags";
  }

  static get properties() {
    return {
      items: Array
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  set data(tags) {
    this.items = tags;
  }
}

customElements.define(HTElementsItemBlockTags.is, HTElementsItemBlockTags);