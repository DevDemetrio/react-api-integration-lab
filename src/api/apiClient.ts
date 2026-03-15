import axios, {type AxiosInstance, type AxiosRequestConfig } from "axios";

export default class ApiClient{
    protected api: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL: "https://api.restful-api.dev"
        })
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.api.get(url, config).then((res) => res.data);
      }
    
      post<T>(url: string, data: unknown): Promise<T> {
        return this.api.post(url, data).then((res) => res.data);
      }
    
      put<T>(url: string, data: unknown): Promise<T> {
        return this.api.put(url, data).then((res) => res.data);
      }
}