# ✅ CHECKLIST - Testar no Android

## 📋 Antes de Começar

- [ ] Android Studio instalado
- [ ] JDK 17 instalado
- [ ] Android SDK configurado (API 33 ou 34)
- [ ] ANDROID_HOME configurado nas variáveis de ambiente
- [ ] Backend rodando (`cd backend && npm run dev`)

---

## 🔧 Setup Android (Uma vez)

- [x] ~~`npm install @capacitor/android`~~ ✅ Feito
- [x] ~~`npx cap add android`~~ ✅ Feito
- [x] ~~`ionic build`~~ ✅ Feito
- [x] ~~`npx cap sync android`~~ ✅ Feito
- [ ] Configurar IP no `mobile/src/environments/environment.ts`
- [ ] Rebuild após configurar IP: `ionic build && npx cap sync android`

---

## 📱 Configurar IP do Backend

### Para Emulador Android:

```typescript
// mobile/src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://10.0.2.2:3001/api'  // ← IP especial do emulador
};
```

### Para Dispositivo Físico:

1. **Descobrir IP da sua máquina:**
   ```powershell
   ipconfig
   # Procure por "Endereço IPv4" - exemplo: 192.168.1.100
   ```

2. **Atualizar environment.ts:**
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://192.168.1.100:3001/api'  // ← Use SEU IP
   };
   ```

3. **Rebuild:**
   ```bash
   cd mobile
   ionic build
   npx cap sync android
   ```

---

## 🎮 Abrir no Android Studio

- [ ] Abrir Android Studio
- [ ] File → Open
- [ ] Selecionar: `C:\sabixao\mobile\android`
- [ ] Aguardar Gradle build finalizar (5-10 min primeira vez)
- [ ] ✅ Ver mensagem "BUILD SUCCESSFUL"

---

## 📱 Configurar Emulador

### Opção A: Criar Novo Emulador

- [ ] Clicar em **Device Manager** (ícone celular)
- [ ] Clicar em **Create Device**
- [ ] Escolher: **Pixel 5** ou **Pixel 6**
- [ ] Escolher sistema: **API 33 (Android 13)** ou **API 34 (Android 14)**
- [ ] Se não instalado, clicar em **Download**
- [ ] Clicar em **Finish**
- [ ] Iniciar o emulador (▶️)

### Opção B: Usar Dispositivo Físico

- [ ] Ativar "Opções do Desenvolvedor" no Android
  - Configurações → Sobre → Tocar 7x em "Número da versão"
- [ ] Ativar "Depuração USB"
  - Configurações → Opções do desenvolvedor → Depuração USB
- [ ] Conectar cabo USB
- [ ] Autorizar no celular quando aparecer popup
- [ ] Verificar se aparece no Device Manager

---

## ▶️ Executar Aplicação

- [ ] Backend rodando: `http://localhost:3001` ✅
- [ ] Emulador/Dispositivo conectado ✅
- [ ] No Android Studio: selecionar dispositivo no dropdown
- [ ] Clicar em **Run ▶️** (ou Shift + F10)
- [ ] Aguardar instalação
- [ ] App abrir no dispositivo

---

## 🧪 Testar Funcionalidades

### Tela 1: Login

- [ ] App abre mostrando tela de login
- [ ] Clicar em "Usar Conta Demo"
- [ ] Campos preenchem com demo@sabixao.dev / 123456
- [ ] Clicar em "ENTRAR"
- [ ] Toast de sucesso aparece
- [ ] Navega para lista de salas

**Se der erro de conexão:**
- [ ] Verificar se backend está rodando
- [ ] Testar URL no navegador do celular/emulador
- [ ] Verificar IP no `environment.ts`
- [ ] Firewall permitindo porta 3001

### Tela 2: Lista de Salas

- [ ] Aparece "Olá, Demo User! 👋"
- [ ] Sala demo aparece (PIN: 123456)
- [ ] Pull to refresh funciona (arrasta para baixo)
- [ ] Badge de status aparece (aguardando/em jogo/finalizado)
- [ ] Data de criação formatada corretamente
- [ ] Botão FAB (+) verde aparece no canto

### Tela 3: Criar Sala

- [ ] Clicar no botão FAB (+)
- [ ] Navega para tela de criar sala
- [ ] Digite nome da sala
- [ ] Ajustar slider de jogadores (5-50)
- [ ] Clicar em "CRIAR SALA"
- [ ] Toast mostra PIN gerado
- [ ] Volta para lista de salas
- [ ] Nova sala aparece na lista

---

## 🐛 Troubleshooting

### ❌ "Connection refused" / "Network error"

**Verificar:**
- [ ] Backend rodando? `http://localhost:3001/health`
- [ ] IP correto no `environment.ts`?
  - Emulador: `10.0.2.2`
  - Físico: IP da rede local (192.168.x.x)
- [ ] Firewall permitindo porta 3001?
- [ ] Testar no navegador: `http://SEU_IP:3001/health`

**Solução:**
```bash
cd mobile
# Editar environment.ts com IP correto
ionic build
npx cap sync android
# Run ▶️ no Android Studio
```

### ❌ "Gradle build failed"

**Solução:**
- [ ] File → Invalidate Caches → Invalidate and Restart
- [ ] Build → Clean Project
- [ ] Build → Rebuild Project

### ❌ Emulador não aparece

**Solução:**
- [ ] Device Manager → Iniciar emulador
- [ ] Aguardar boot completo
- [ ] Verificar dropdown de dispositivos

### ❌ "Unable to locate adb"

**Solução:**
- [ ] Adicionar ao PATH:
  ```
  C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk\platform-tools
  ```
- [ ] Reiniciar terminal e Android Studio

---

## 📦 Gerar APK Final

- [ ] No Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)
- [ ] Aguardar build
- [ ] APK estará em: `mobile\android\app\build\outputs\apk\debug\app-debug.apk`
- [ ] Transferir para celular
- [ ] Instalar APK

---

## ✅ Verificação Final

- [ ] App abre no emulador/dispositivo
- [ ] Login funciona
- [ ] Lista de salas carrega
- [ ] Pull to refresh funciona
- [ ] Criar sala funciona
- [ ] Nova sala aparece na lista
- [ ] Toast notifications aparecem
- [ ] Navegação funciona (back button)
- [ ] Interface responsiva ao touch

---

## 📊 Status

**✅ Pronto para usar:**
- Plataforma Android adicionada
- Build inicial feito
- Arquivos sincronizados
- Services configurados com `environment.ts`

**⚠️ Você precisa fazer:**
1. Configurar IP no `environment.ts` (emulador ou dispositivo)
2. Rebuild: `ionic build && npx cap sync android`
3. Abrir Android Studio
4. Criar/iniciar emulador
5. Run ▶️

---

## 📚 Documentação

- **Setup completo:** `TESTAR-ANDROID.md`
- **Quick start:** `mobile/ANDROID-QUICKSTART.md`
- **Configurar IP:** `mobile/CONFIGURAR-IP.md`
- **Testar no navegador:** `COMO-TESTAR.md`

---

**🎉 Pronto para testar no Android!**
