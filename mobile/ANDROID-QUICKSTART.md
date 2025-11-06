# 🚀 QUICK START - Android Studio

## ✅ O que já foi feito:

- ✅ Plataforma Android adicionada
- ✅ Build da aplicação feita
- ✅ Arquivos sincronizados com Android
- ✅ Pasta `mobile/android/` criada
- ✅ Services configurados para usar `environment.ts`

---

## 📱 PRÓXIMOS PASSOS:

### 1️⃣ Abrir no Android Studio

**Opção A - Abrir manualmente:**
1. Abra o **Android Studio**
2. Clique em **File → Open**
3. Navegue até: `C:\sabixao\mobile\android`
4. Clique em **OK**

**Opção B - Via linha de comando:**
```bash
cd C:\sabixao\mobile
studio android
# ou
studio.exe android
```

---

### 2️⃣ Aguardar Gradle Build

⏳ **Primeira vez demora 5-10 minutos!**

- Android Studio vai baixar dependências
- Barra de progresso aparece no canto inferior direito
- Aguarde até aparecer "BUILD SUCCESSFUL"

---

### 3️⃣ Configurar IP do Backend

**IMPORTANTE:** Emulador Android não acessa `localhost` da mesma forma!

Edite: `mobile/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  // Para EMULADOR Android:
  apiUrl: 'http://10.0.2.2:3001/api'
  
  // Para DISPOSITIVO FÍSICO (descubra seu IP com ipconfig):
  // apiUrl: 'http://192.168.X.X:3001/api'
};
```

Depois:
```bash
cd C:\sabixao\mobile
ionic build
npx cap sync android
```

---

### 4️⃣ Criar/Iniciar Emulador

**No Android Studio:**

1. Clique no ícone **Device Manager** (celular)
2. Se não tiver emulador:
   - Clique em **Create Device**
   - Escolha: **Pixel 5** ou **Pixel 6**
   - Sistema: **API 33 (Android 13)** ou **API 34 (Android 14)**
   - Clique em **Finish**
3. Clique no ▶️ ao lado do emulador para iniciar

---

### 5️⃣ Iniciar Backend

**Em um terminal separado:**

```bash
cd C:\sabixao\backend
npm run dev
```

Aguarde: `🚀 Sabixão backend rodando em http://localhost:3001`

---

### 6️⃣ Rodar no Emulador

**No Android Studio:**

1. Certifique-se que o emulador está rodando
2. Na barra superior, selecione seu emulador no dropdown
3. Clique no botão **Run ▶️** (ou pressione **Shift + F10**)
4. Aguarde o app instalar e abrir

---

## ✅ Testando

Quando o app abrir no emulador:

1. **Tela de Login:**
   - Clique em "Usar Conta Demo"
   - Clique em "ENTRAR"

2. **Tela de Lista de Salas:**
   - Deve aparecer a sala demo (PIN: 123456)
   - Puxe para baixo para refresh

3. **Criar Nova Sala:**
   - Clique no botão **+** (FAB)
   - Preencha o nome
   - Ajuste número de jogadores
   - Clique em "CRIAR SALA"
   - Deve voltar para lista com a nova sala

---

## 🐛 Troubleshooting

### Erro: "Connection refused" / "Network error"

**Solução:**
1. Backend está rodando? Verifique: `http://localhost:3001/health`
2. IP correto no `environment.ts`?
   - Emulador: `http://10.0.2.2:3001/api`
   - Físico: `http://SEU_IP:3001/api`
3. Firewall bloqueando? Permita conexões na porta 3001

### Emulador não aparece no dropdown

**Solução:**
1. Device Manager → Inicie o emulador manualmente
2. Aguarde até ligar completamente
3. Verifique se aparece no dropdown

### Gradle build failed

**Solução:**
1. File → Invalidate Caches → Invalidate and Restart
2. Aguarde reiniciar
3. Build → Clean Project
4. Build → Rebuild Project

---

## 📂 Estrutura Criada

```
mobile/
├── android/                    # ← Projeto Android nativo
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── assets/
│   │   │       │   └── public/  # ← Seus arquivos web
│   │   │       ├── java/
│   │   │       └── AndroidManifest.xml
│   │   └── build.gradle
│   └── build.gradle
├── src/
│   ├── app/
│   ├── environments/
│   │   └── environment.ts      # ← Configure IP aqui!
│   └── ...
└── www/                        # ← Build web
```

---

## 🎯 Comandos Rápidos

**Sempre que modificar o código:**
```bash
cd C:\sabixao\mobile
ionic build
npx cap sync android
# No Android Studio: Run ▶️
```

**Ou use o atalho (se funcionar):**
```bash
ionic capacitor run android
```

---

## 📱 Resultado Final

Você verá:
- ✅ App rodando no emulador Android
- ✅ Interface nativa mobile
- ✅ Touch gestures funcionando
- ✅ Conectado ao backend
- ✅ Login, lista e criar sala funcionando

---

**Pronto! Seu app está no Android! 🎉**

---

## 📸 Gerando APK para Instalar

Depois de testar, gere o APK:

1. No Android Studio:
   - **Build → Build Bundle(s) / APK(s) → Build APK(s)**

2. Aguarde o build

3. APK estará em:
   ```
   mobile\android\app\build\outputs\apk\debug\app-debug.apk
   ```

4. Transfira para qualquer Android e instale!

---

**Documentação completa em:** `TESTAR-ANDROID.md`
