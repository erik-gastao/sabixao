# 🔧 Configurar IP do Backend para Android

## Para Emulador Android:

Edite: `mobile/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://10.0.2.2:3001/api'  // ← IP especial do emulador
};
```

## Para Dispositivo Físico:

1. **Descubra seu IP local:**
```powershell
ipconfig
# Procure por "Endereço IPv4" - exemplo: 192.168.1.100
```

2. **Edite:** `mobile/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.100:3001/api'  // ← Use SEU IP
};
```

## Depois de alterar:

```bash
ionic build
npx cap sync android
```

No Android Studio: Run ▶️

---

**Dica:** Teste se o backend está acessível:
```powershell
# No navegador ou Postman:
http://SEU_IP:3001/health
```
