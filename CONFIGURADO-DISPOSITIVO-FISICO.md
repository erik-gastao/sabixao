# ✅ CONFIGURADO PARA DISPOSITIVO FÍSICO!

## 🔧 O que foi feito:

1. ✅ **IP configurado:** `192.168.3.155:3001/api`
2. ✅ **Build** concluído
3. ✅ **Sincronizado** com Android
4. ✅ **Backend** rodando em `localhost:3001`

---

## 📱 PRÓXIMOS PASSOS:

### 1️⃣ Permitir acesso no Firewall do Windows

O backend precisa ser acessível na sua rede local. Execute este comando no PowerShell **como Administrador**:

```powershell
New-NetFirewallRule -DisplayName "Sabixao Backend" -Direction Inbound -LocalPort 3001 -Protocol TCP -Action Allow
```

### 2️⃣ No Android Studio: Run ▶️

Instale novamente o app no celular:
- Clique em **Run ▶️** no Android Studio
- Aguarde a instalação
- O app vai abrir no seu celular

### 3️⃣ Testar o Login

1. Celular e PC devem estar na **mesma rede Wi-Fi**
2. Clique em **"USAR CONTA DEMO"**
3. Clique em **"ENTRAR"**
4. ✅ Deve funcionar!

---

## 🧪 Testar se o backend está acessível

**No navegador do seu celular**, acesse:
```
http://192.168.3.155:3001/health
```

**Deve mostrar:** `OK` ou algo parecido

Se NÃO funcionar:
- Certifique-se que o celular e PC estão na mesma rede Wi-Fi
- Libere a porta 3001 no firewall (comando acima)

---

## 📊 Configuração atual:

- **Seu PC (Backend):** 192.168.3.155:3001
- **Seu celular:** Conectado via USB + mesma rede Wi-Fi
- **App mobile:** Configurado para acessar `http://192.168.3.155:3001/api`

---

**Agora é só rodar no Android Studio! 🚀**
