import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:4000/api'; // Ajusta la URL de tu servidor backend

  constructor(private http: HttpClient) { }

  getAllEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/empleados`);
  }

  getEmpleadoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/empleados/${id}`);
  }

  createEmpleado(empleado: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/empleados`, empleado);
  }

  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/empleados/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/empleados/${id}`);
  }
}
