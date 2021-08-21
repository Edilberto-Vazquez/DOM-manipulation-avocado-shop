class ProductCard extends HTMLElement {
  protected _image: any;
  protected _name: any;
  protected _price: any;

  constructor(image: string, name: string, price: string) {
    super();
    this.attachShadow({ mode: "open" });
    this._image = image;
    this._name = name;
    this._price = price;
  }

  public get image(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get price(): string {
    return this._price;
  }

  public set price(value: string) {
    this._price = value;
  }

  protected getStyles(): string {
    return `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      :host {
        width: 100%;
        height: auto;
        display: grid;
      }
      .product-item {
        width: 100%;
        max-height: 340px;
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        place-items: center;
        row-gap: 14px;
        border: 1px solid #568203;
        border-radius: 10px;
        cursor: pointer;
      }
      .product-item:hover{
        background: #568203;
      }
      .product-item__image {
        max-width: 200px;
        border-radius: 50%;
        height: auto;
      }
      .product-description {
        width: 100%;
        height: auto;
        text-align: center;
      }
      .product-description__name {
        font-size: 2.4rem;
      }
      .product-description__price {
        font-size: 2.4rem;
        font-weight: 700;
      }
    </style>
    `;
  }

  protected getTemplete(): HTMLTemplateElement {
    const templete = document.createElement("template");
    templete.innerHTML = `
      <div class="product-item">
        <img class="product-item__image" src=${this.image} alt=${this.name}>
        <div class="product-description">
          <h2 class="product-description__name">${this.name}</h2>
          <span class="product-description__price">$${this.price}</span>
        </div>
      </div>
      ${this.getStyles()}
    `;
    return templete;
  }

  protected render() {
    this.shadowRoot?.append(this.getTemplete().content.cloneNode(true));
  }

  // public static get observedAttributes(): string[] {
  //   return ["image", "name", "price"];
  // }

  // public attributeChangedCallback(
  //   name: string,
  //   oldValue: any,
  //   newValue: any
  // ): void {
  //   if (name === "image") {
  //     this.image = newValue;
  //   }
  //   if (name === "name") {
  //     this.name = newValue;
  //   }
  //   if (name === "price") {
  //     this.price = newValue;
  //   }
  // }

  public connectedCallback(): void {
    this.render();
  }
}

customElements.define("product-card", ProductCard);

export default ProductCard;
