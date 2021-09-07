import React from 'react';

const url = 'http://127.0.0.1:3000/api'


export const get = async (path) => {
    if (path.charAt(0) == '/') {
        path = path.substring(1)
    }
    
    const response = await fetch(`${url}/${path}`);
    return await response.json();
}

export const getList = async (path) => {
    if (path.charAt(0) == '/') {
        path = path.substring(1)
    }
    
    const response = await fetch(`${url}/${path}`);
    return await response.json();
}

export const getOne = async (path) => {
    if (path.charAt(0) == '/') {
        path = path.substring(1)
    }
    const response = await fetch(`${url}/${path}`);
    return await response.json();
}

export const create = async (path, data) => {
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
}

export const update = async (path, data) => {
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
}
