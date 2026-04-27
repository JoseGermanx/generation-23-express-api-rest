# API Reference - Endpoints para Frontend

**Base URL**: `http://localhost:3000`

> **Autenticación**: La mayoría de endpoints requieren un token JWT en el header:
> ```
> Authorization: Bearer <token>
> ```

---

## Usuarios

### POST /usuario/registro

Registrar un nuevo usuario. No requiere autenticación.

**Request**:
```json
{
    "nombre": "Ana García",
    "email": "ana@example.com",
    "password": "miPassword123"
}
```

**Response** (201):
```json
{
    "msg": "Usuario creado correctamente.",
    "id": "6812a3f4e2b1c09d4a5f7e23"
}
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 500 | Error de servidor (ej: email duplicado) |

---

### POST /usuario/login

Iniciar sesión y obtener un token de acceso. No requiere autenticación.

**Request**:
```json
{
    "email": "ana@example.com",
    "password": "miPassword123"
}
```

**Response** (200):
```json
{
    "msg": "Login correcto",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 401 | `{ "msg": "Credenciales inválidas." }` |

> El token tiene una vigencia de **8 horas** y contiene `id`, `email` y `rol` del usuario.

---

## Espacios

### GET /espacios

Obtener todos los espacios disponibles. Requiere autenticación.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
[
    {
        "_id": "6812a3f4e2b1c09d4a5f7e10",
        "nombre": "Sala de reuniones A",
        "capacidad": 10,
        "ubicacion": "Primer piso",
        "disponibilidad": true
    }
]
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 401 | `{ "msg": "Token de autenticación requerido" }` |
| 500 | Error de servidor |

---

### POST /espacios

Crear un nuevo espacio. Requiere autenticación y rol **admin**.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
{ "msg": "Crear espacios" }
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 401 | `{ "msg": "Token de autenticación requerido" }` |
| 403 | `{ "msg": "Acceso denegado." }` |

---

## Reservas

### GET /reservas

Obtener todas las reservas. Requiere autenticación.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
[
    {
        "_id": "6812b1c3e2b1c09d4a5f7e99",
        "espacio": {
            "nombre": "Sala de reuniones A"
        },
        "usuario": {
            "nombre": "Ana García",
            "email": "ana@example.com"
        },
        "fecha": "14-04-2026",
        "horaInicio": "10:00",
        "horaFin": "11:00"
    }
]
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 401 | `{ "msg": "Token de autenticación requerido" }` |
| 500 | `{ "msg": "Error de servidor." }` |

---

### GET /reservas/usuario/:usuarioId

Obtener todas las reservas de un usuario específico. Requiere autenticación.

**Headers**:
```
Authorization: Bearer <token>
```

**Params**:
- `usuarioId` — ObjectId de MongoDB del usuario

**Response** (200):
```json
[
    {
        "_id": "6812b1c3e2b1c09d4a5f7e99",
        "espacio": {
            "nombre": "Sala de reuniones A"
        },
        "usuario": "6812a3f4e2b1c09d4a5f7e23",
        "fecha": "14-04-2026",
        "horaInicio": "10:00",
        "horaFin": "11:00"
    }
]
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 401 | `{ "msg": "Token de autenticación requerido" }` |
| 500 | Error de servidor |

---

### POST /reservas

Crear una nueva reserva. Requiere autenticación.

**Headers**:
```
Authorization: Bearer <token>
```

**Request**:
```json
{
    "usuario": "6812a3f4e2b1c09d4a5f7e23",
    "espacio": "6812a3f4e2b1c09d4a5f7e10",
    "fecha": "14-04-2026",
    "horaInicio": "10:00",
    "horaFin": "11:00"
}
```

> `usuario` y `espacio` deben ser IDs de MongoDB válidos.

**Response** (201):
```json
{
    "_id": "6812b1c3e2b1c09d4a5f7e99",
    "usuario": "6812a3f4e2b1c09d4a5f7e23",
    "espacio": "6812a3f4e2b1c09d4a5f7e10",
    "fecha": "14-04-2026",
    "horaInicio": "10:00",
    "horaFin": "11:00"
}
```

**Errores**:
| Status | Respuesta |
|--------|-----------|
| 400 | `{ "msg": "Todos los campos son obligatorios." }` |
| 400 | `{ "msg": "Ya existe una reserva para ese horario y oficina seleccionados." }` |
| 401 | `{ "msg": "Token de autenticación requerido" }` |
| 404 | `{ "msg": "El espacio seleccionado no existe." }` |
| 500 | Error de servidor |

---

## Formatos

- **Fecha**: `DD-MM-YYYY` (ej: "14-04-2026")
- **Hora**: `HH:MM` formato 24h (ej: "14:00")
- **IDs**: ObjectId de MongoDB (cadena de 24 caracteres hexadecimales)
- **Content-Type**: `application/json`
