export default class ThingsService {
  _apiBase = 'https://murmuring-shelf-80544.herokuapp.com/api/v1/things';
  _apiMongodb = 'https://murmuring-shelf-80544.herokuapp.com/api/v2';

  getThings = async () => {
    const res = await fetch(`${this._apiBase}`);
    if (!res.ok) {
      throw new Error(`Could Not Fetch}`);
    }
    return await res.json();
  };

  postThing = async (data) => {
    await fetch(`${this._apiBase}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  putThing = async (id, data) => {
    await fetch(`${this._apiBase}/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  deleteThing = async (id) => {
    await fetch(`${this._apiBase}/${id}`, {
      method: 'DELETE'
    })
  }

  getThingsDb = async () => {
    const res = await fetch(`${this._apiMongodb}`);
    if (!res.ok) {
      throw new Error(`Could Not Fetch}`);
    }
    return await res.json();
  };

  getThingsDbAll = async () => {
    const res = await fetch('https://murmuring-shelf-80544.herokuapp.com/api/v2/all');
    const data = await res.json();
  
    return data;
  };

  postThingDb = async (data) => {
    await fetch(`${this._apiMongodb}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  putThingDb = async (id, data) => {
    await fetch(`${this._apiMongodb}/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  deleteThingDb = async (id) => {
    await fetch(`${this._apiMongodb}/${id}`, {
      method: 'DELETE'
    })
  }

  loadWithPagination = async (page, limit) => {
    const res = await fetch(
      `https://murmuring-shelf-80544.herokuapp.com/api/v2/?page=${page}&limit=${limit}`
    );
    const things = await res.json();
    return things;
  }
}
