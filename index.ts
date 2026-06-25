export class InnovacionX {
  token: string;
  baseUrl: string;

  constructor(token: string, baseUrl = "https://tu-dominio.com/api/public") {
    if (!token) throw new Error("Falta x-public-token");
    this.token = token;
    this.baseUrl = baseUrl;
  }

  async request(endpoint: string): Promise<any> {
    const res = await fetch(this.baseUrl + endpoint, {
      headers: {
        "x-public-token": this.token,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    return res.json();
  }

  getProductos() {
    return this.request("/productos");
  }
}
