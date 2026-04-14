# API Reference - Endpoints para Frontend

**Base URL**: `http://localhost:3000`

---

## Endpoints

### GET /espacios

Obtener todas las salas disponibles.

**Response** (200):
```json
[
    {
        "id": 1,
        "nombre": "Sala de reuniones A",
        "capacidad": 10,
        "ubicación": "Primer piso",
        "disponibilidad": true
    }
]
```

---

### GET /reservas

Obtener todas las reservas.

**Response** (200):
```json
[
    {
        "id": 1776185804939,
        "espacioId": 1,
        "fecha": "14-04-2026",
        "horaInicio": "10:00",
        "horaFin": "11:00"
    }
]
```

**Error** (500):
```json
{ "msg": "Error de servidor." }
```

---

### POST /reservas

Crear una nueva reserva.

**Request**:
```json
{
    "espacioId": 1,
    "fecha": "14-04-2026",
    "horaInicio": "10:00",
    "horaFin": "11:00"
}
```

**Response** (201):
```json
{
    "id": 1776186017608,
    "espacioId": 1,
    "fecha": "14-04-2026",
    "horaInicio": "10:00",
    "horaFin": "11:00"
}
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 400 | `{ "msg": "Todos los campos son obligatorios." }` |
| 404 | `{ "msg": "El espacio seleccionado no existe." }` |
| 400 | `{ "msg": "Ya existe una reserva para ese horario y oficina seleccionados." }` |
| 500 | `{ "msg": "Error de servidor." }` |

---

## Formatos

- **Fecha**: `DD-MM-YYYY` (ej: "14-04-2026")
- **Hora**: `HH:MM` formato 24h (ej: "14:00")
- **Content-Type**: `application/json`