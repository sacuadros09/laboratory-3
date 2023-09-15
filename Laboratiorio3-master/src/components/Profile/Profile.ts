import { data } from "../../data";

export enum Attribute {
    "images" = "images",
}

class Profile extends HTMLElement {
    images?: number[][];

    static get observedAttributes(): Attribute[] {
        return [Attribute.images];
    }

    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | null,
        newValue: string | null
    ) {
        switch (propName) {
            case Attribute.images:
                if (newValue) {
                    this.images = JSON.parse(newValue);
                } else {
                    this.images = undefined;
                }
                break;

            default:
                (this as any)[propName] = newValue;
                break;
        }

        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (this.images) {
            const pixelFigure = document.createElement("figure");
            for (let row = 0; row < this.images.length; row++) {
                for (let column = 0; column < this.images[row].length; column++) {
                    const pixelRow = this.images[row];
                    for (let depth = 0; depth < pixelRow.length; depth++) {
                        const pixelValue = pixelRow[depth];
                        const pixelSpan = document.createElement("div");
                        pixelSpan.style.backgroundColor = pixelValue === 0 ? "white" : "black";
                        pixelSpan.style.width="10px"
                        pixelSpan.style.height="10px"
    
                        pixelFigure.appendChild(pixelSpan);
                                       
                    
                    }
                    pixelFigure.appendChild(document.createElement("br"));
                }
                pixelFigure.appendChild(document.createElement("br")); 
            }
    
            this.shadowRoot?.appendChild(pixelFigure);
        }
    }
}
customElements.define("my-profile", Profile);
export default Profile;