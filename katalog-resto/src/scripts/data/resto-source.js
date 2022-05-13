import API_ENDPOINT from "../globals/api-endpoint";

class RestoSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(dataReview) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataReview),
    });
    console.log(response);
  }
}

export default RestoSource;
