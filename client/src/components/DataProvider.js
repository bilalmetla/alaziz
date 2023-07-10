
import { constants } from "../constants";

let url = 'http://127.0.0.1:3000/api'

if (constants.isLocal) {
    url = constants.localServer
} else {
    url = constants.productionServer
}





export const getList = async (path) => {
    try {
        if (path.charAt(0) == '/') {
            path = path.substring(1)
        }
        
        const response = await fetch(`${url}/${path}`);
        return await response.json();
    } catch (err) {
        return {"errorMessage": "failed from server"}
    }
    
}

export const getOne = async (path) => {
    try {
        if (path.charAt(0) == '/') {
            path = path.substring(1)
        }
        const response = await fetch(`${url}/${path}`);
        return await response.json();
    } catch (err) {
        return {"errorMessage": "failed from server"}
    }
    
}

export const create = async (path, data) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        if (path.charAt(0) == '/') {
            path = path.substring(1)
        }
        const response = await fetch(`${url}/${path}`, requestOptions);
        return await response.json();
    } catch (err) {
        return {"errorMessage": "failed from server"}
    }
    
}

export const update = async (path, data) => {
    try {
        if (path.charAt(0) == '/') {
            path = path.substring(1)
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${url}/${path}`, requestOptions);
        return await response.json();
    } catch (err) {
        return {"errorMessage": "failed from server"}
    }
    
}

export const deleteRecord = async (path) => {
    try {
        if (path.charAt(0) == '/') {
            path = path.substring(1)
        }
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch(`${url}/${path}`, requestOptions);
        return await response.json();
    } catch (err) {
        return {"errorMessage": "failed from server"}
    }
    
}


export const get = getList;
export const post = create;
export const remove = deleteRecord;