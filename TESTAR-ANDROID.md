# 📱 GUIA: Testar no Android Studio

## 🎯 Objetivo

Executar o Sabixão Mobile em um emulador Android ou dispositivo físico usando Android Studio.

---

## 📋 Pré-requisitos

### 1️⃣ Instalar Android Studio

Se ainda não tiver instalado:

1. Download: [https://developer.android.com/studio](https://developer.android.com/studio)
2. Execute o instalador
3. Siga o wizard de instalação
4. **Importante:** Instale o Android SDK quando solicitado

### 2️⃣ Configurar Variáveis de Ambiente

Adicione ao PATH do Windows:

```
ANDROID_HOME = C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
```

Adicione ao PATH:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\cmdline-tools\latest\bin
```

### 3️⃣ Instalar Java JDK

Capacitor precisa do JDK 17:

1. Download: [https://adoptium.net/](https://adoptium.net/)
2. Escolha: **Temurin 17 (LTS)**
3. Instale e configure JAVA_HOME

---

## 🚀 Passo a Passo: Adicionar Android ao Projeto

### 1️⃣ Adicionar Plataforma Android

No terminal, na pasta do projeto mobile:

```bash
cd C:\sabixao\mobile
ionic capacitor add android
```

**Isso vai:**
- Criar pasta `android/` no projeto
- Configurar o projeto Android nativo
- Sincronizar arquivos do Capacitor

---

### 2️⃣ Build da Aplicação Web

Antes de abrir no Android Studio, faça o build:

```bash
cd C:\sabixao\mobile
ionic build
```

**Aguarde:** "Application bundle generation complete"

---

### 3️⃣ Sincronizar com Android

Copie os arquivos web para o projeto Android:

```bash
npx cap sync android
```

**Isso copia:**
- Arquivos do `www/` para `android/app/src/main/assets/public/`
- Plugins do Capacitor
- Configurações

---

### 4️⃣ Abrir no Android Studio

```bash
npx cap open android
```

**OU abra manualmente:**
1. Abra Android Studio
2. File → Open
3. Navegue até: `C:\sabixao\mobile\android`
4. Clique em "OK"

---

## 🎮 Configurar Emulador Android

### Opção 1: Criar Emulador no Android Studio

1. No Android Studio, clique em **Device Manager** (ícone de celular)
2. Clique em **Create Device**
3. Escolha um dispositivo:
   - **Recomendado:** Pixel 5 ou Pixel 6
4. Escolha uma imagem do sistema:
   - **Recomendado:** API 33 (Android 13) ou API 34 (Android 14)
   - Se não estiver instalada, clique em "Download"
5. Clique em **Finish**

### Opção 2: Usar Dispositivo Físico

1. **Ative as Opções do Desenvolvedor** no Android:
   - Configurações → Sobre o telefone
   - Toque 7x em "Número da versão"
   
2. **Ative a Depuração USB:**
   - Configurações → Opções do desenvolvedor
   - Ative "Depuração USB"

3. **Conecte o cabo USB**
4. **Autorize no celular** quando aparecer o popup

---

## ▶️ Executar a Aplicação

### No Android Studio:

1. **Aguarde o Gradle Build finalizar** (primeira vez demora ~5-10 min)
   - Barra de progresso no canto inferior direito

2. **Selecione o dispositivo:**
   - No topo, dropdown com dispositivos
   - Escolha o emulador ou dispositivo físico

3. **Clique no botão Run (▶️)** ou pressione **Shift + F10**

4. **Aguarde:**
   - Emulador iniciar (se ainda não estiver)
   - App instalar
   - App abrir

---

## 🔧 Configuração de Rede para Desenvolvimento

### ⚠️ IMPORTANTE: Backend no Emulador

O emulador Android não pode acessar `localhost:3001` da mesma forma que o navegador!

### Solução 1: Usar IP da Máquina

1. **Descubra seu IP local:**

```powershell
ipconfig
# Procure por "Endereço IPv4" da sua rede Wi-Fi ou Ethernet
# Exemplo: 192.168.1.100
```

2. **Atualize os serviços no Mobile:**

Edite: `mobile/src/app/services/auth.service.ts`

```typescript
// ANTES:
private readonly API_URL = 'http://localhost:3001/api/auth';

// DEPOIS (use SEU IP):
private readonly API_URL = 'http://192.168.1.100:3001/api/auth';
```

Edite: `mobile/src/app/services/salas.service.ts`

```typescript
// ANTES:
private readonly API_URL = 'http://localhost:3001/api/salas';

// DEPOIS (use SEU IP):
private readonly API_URL = 'http://192.168.1.100:3001/api/salas';
```

3. **Rebuild e sincronize:**

```bash
ionic build
npx cap sync android
```

### Solução 2: Usar IP Especial do Emulador

Se estiver usando **emulador Android** (não dispositivo físico):

Use: `http://10.0.2.2:3001` (isso aponta para localhost da máquina host)

```typescript
private readonly API_URL = 'http://10.0.2.2:3001/api/auth';
```

---

## 📱 Testando no Dispositivo Android

### 1️⃣ Inicie o Backend

```bash
cd C:\sabixao\backend
npm run dev
```

Certifique-se que está acessível na rede (não só localhost).

### 2️⃣ Execute no Android Studio

1. Clique em Run ▶️
2. Aplicação abrirá no emulador/dispositivo
3. Você verá a tela de Login

### 3️⃣ Teste o Login

1. Clique em "Usar Conta Demo"
2. Clique em "ENTRAR"
3. Deve ver a lista de salas

**Se der erro de conexão:**
- Verifique se o backend está rodando
- Verifique se usou o IP correto
- Teste no navegador do celular: `http://SEU_IP:3001/health`

---

## 🐛 Troubleshooting

### "Gradle build failed"

**Solução:**
1. File → Invalidate Caches → Invalidate and Restart
2. Build → Clean Project
3. Build → Rebuild Project

### "Unable to locate adb"

**Solução:**
Adicione ao PATH:
```
C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk\platform-tools
```

Reinicie o terminal e Android Studio.

### "ERR_CONNECTION_REFUSED"

**Solução:**
1. Backend está rodando? Verifique: `http://SEU_IP:3001/health` no navegador
2. IP correto nos services? Deve ser o IP da sua máquina na rede local
3. Firewall bloqueando? Permita conexões na porta 3001

### "Cannot find module '@capacitor/android'"

**Solução:**
```bash
npm install @capacitor/android
npx cap sync android
```

---

## 🎯 Comandos Resumidos

### Setup Inicial (uma vez):

```bash
cd C:\sabixao\mobile
ionic capacitor add android
```

### Sempre que modificar o código:

```bash
# 1. Build
ionic build

# 2. Sincronizar
npx cap sync android

# 3. Abrir Android Studio (se não estiver aberto)
npx cap open android

# 4. No Android Studio: Run ▶️
```

### Ou use o atalho:

```bash
# Build + Sync + Run em um comando
ionic capacitor run android
```

---

## 📊 Estrutura de Arquivos Android

Após adicionar o Android, você terá:

```
mobile/
├── android/                    # ← Projeto Android nativo
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── assets/
│   │   │       │   └── public/  # ← Seus arquivos web (www/)
│   │   │       ├── java/
│   │   │       └── AndroidManifest.xml
│   │   └── build.gradle
│   ├── gradle/
│   └── build.gradle
├── src/                        # ← Código Ionic/Angular
├── www/                        # ← Build web (gerado)
└── capacitor.config.ts
```

---

## 🔄 Workflow de Desenvolvimento

### Desenvolvimento Rápido (no navegador):

```bash
ionic serve
# Faça mudanças no código
# Veja mudanças instantaneamente
```

### Teste em Android (periodicamente):

```bash
ionic build
npx cap sync android
# No Android Studio: Run ▶️
```

---

## 🎨 Features Mobile Nativas

Com o app rodando no Android, você pode testar:

### ✅ Funciona Automaticamente:
- Touch gestures nativos
- Teclado nativo
- Pull to refresh
- Navegação nativa (back button)
- Notificações toast

### 🔧 Pode Adicionar Futuramente:
- Haptic feedback (vibração)
- Câmera
- Geolocalização
- Push notifications
- Storage nativo

---

## 📝 Arquivo de Configuração

O Capacitor usa: `mobile/capacitor.config.ts`

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mobile',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
```

---

## 🚀 Build Final (APK)

Para gerar um APK instalável:

1. No Android Studio:
   - Build → Build Bundle(s) / APK(s) → Build APK(s)

2. Aguarde o build finalizar

3. APK estará em:
   ```
   mobile/android/app/build/outputs/apk/debug/app-debug.apk
   ```

4. Transfira para o celular e instale!

---

## ✅ Checklist Android

- [ ] Android Studio instalado
- [ ] JDK 17 instalado
- [ ] ANDROID_HOME configurado
- [ ] `ionic capacitor add android` executado
- [ ] `ionic build` executado
- [ ] `npx cap sync android` executado
- [ ] IP do backend atualizado nos services
- [ ] Backend rodando e acessível na rede
- [ ] Emulador criado OU dispositivo conectado
- [ ] Aplicação executada com sucesso
- [ ] Login testado
- [ ] Lista de salas testada
- [ ] Criar sala testada

---

## 🎯 Resultado Final

Você terá:
- ✅ App instalado no Android
- ✅ Interface nativa mobile
- ✅ Conectado ao backend
- ✅ Todas as funcionalidades testadas
- ✅ APK gerado para distribuição

---

**Pronto para rodar no Android! 🤖📱**
