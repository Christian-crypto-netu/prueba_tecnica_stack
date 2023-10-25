import { Component } from '@angular/core';
import { EmpleadoService } from '../../empleado-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  empleado = {
    nombre: '',
    email: '',
    sexo: '',
    area: '',
    descripcion: '',
    boletin: false, // Dejar boletin como un booleano
    roles: [],
  };

  constructor(private empleadoService: EmpleadoService) {}

  guardarEmpleado() {
    const areasMapping: { [key: string]: number } = {
      'Administración': 1,
      'Ingeniería': 2,
      'Desarrollo y Negocio': 5,
      'Proyectos': 6,
      'Servicios': 7,
      'Calidad': 8,
    };

    const sexoMapping: { [key: string]: string } = {
      'Masculino': 'M',
      'Femenino': 'F',
    };

    // Validación del campo de "Área" para asegurarse de que no esté vacío
    if (!this.empleado.area) {
      console.error('El campo de área es obligatorio. Por favor, seleccione un área.');
      return; // Detener la ejecución si el área está vacía
    }

    // Mapeo de valores
    if (this.empleado.area) {
      this.empleado.area = areasMapping[this.empleado.area].toString();
    }
    this.empleado.sexo = sexoMapping[this.empleado.sexo];
    this.empleado.boletin = this.empleado.boletin;

    // Luego, envía los datos al servidor
    this.empleadoService.createEmpleado(this.empleado).subscribe(
      (data) => {
        // Maneja la respuesta del servidor aquí
        console.log('Empleado guardado con éxito', data);
      },
      (error) => {
        // Maneja los errores aquí
        console.error('Error al guardar el empleado', error);
      }
    );
  }
}
