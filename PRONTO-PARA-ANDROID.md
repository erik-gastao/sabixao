# ✅ CHECKLIST - Rodar no Android Studio AGORA

## 🎯 Status Atual:
- ✅ Backend rodando em `http://localhost:3001`
- ✅ IP configurado para emulador: `10.0.2.2:3001`
- ✅ Build da aplicação concluído
- ✅ Arquivos sincronizados com Android

---

## 📱 PASSOS PARA RODAR NO ANDROID STUDIO:

### 1️⃣ Abrir Android Studio
- [ ] Inicie o **Android Studio**

### 2️⃣ Abrir o Projeto
- [ ] Clique em **File → Open**
- [ ] Navegue até: **`C:\sabixao\mobile\android`**
- [ ] Clique em **OK**
- [ ] **Aguarde o Gradle Build** (pode demorar 5-10 min na primeira vez)
- [ ] Barra de progresso aparece no canto inferior direito
- [ ] Aguarde até aparecer **"BUILD SUCCESSFUL"**

### 3️⃣ Criar Emulador (se não tiver)
- [ ] Clique no ícone **Device Manager** (celular) na lateral direita
- [ ] Se já tiver emulador, pule para o passo 4
- [ ] Clique em **Create Device**
- [ ] Selecione: **Pixel 5** ou **Pixel 6**
- [ ] Clique em **Next**
- [ ] Selecione imagem do sistema: **API 33 (Android 13)** ou **API 34**
- [ ] Se não estiver instalada, clique em **Download** e aguarde
- [ ] Clique em **Next**
- [ ] Dê um nome (ex: "Pixel_5_API_33")
- [ ] Clique em **Finish**

### 4️⃣ Iniciar Emulador
- [ ] No **Device Manager**, encontre seu emulador
- [ ] Clique no ícone **▶️ (Play)** ao lado do nome
- [ ] Aguarde o Android iniciar (1-2 minutos)
- [ ] Tela do Android deve aparecer

### 5️⃣ Rodar Aplicação
- [ ] Na barra superior do Android Studio, verifique se seu emulador está selecionado no dropdown
- [ ] Clique no botão verde **"Run" ▶️** (ou pressione **Shift + F10**)
- [ ] Aguarde:
   - Gradle build (se necessário)
   - Instalação do APK no emulador
   - App abrir automaticamente

### 6️⃣ Testar o App
- [ ] App abre mostrando tela de login do Sabixão
- [ ] Clique em **"USAR CONTA DEMO"**
- [ ] Clique em **"ENTRAR"**
- [ ] ✅ Toast de sucesso deve aparecer: "Bem-vindo, Demo User!"
- [ ] ✅ Navega para lista de salas
- [ ] ✅ Sala demo aparece (PIN: 123456)
- [ ] Teste **pull to refresh** (arraste tela para baixo)
- [ ] Clique no **botão verde (+)** para criar sala
- [ ] Preencha nome e ajuste jogadores
- [ ] Clique em **"CRIAR SALA"**
- [ ] ✅ Toast mostra PIN gerado
- [ ] ✅ Nova sala aparece na lista

---

## 🐛 Se der erro de conexão:

### "Network error" / "Erro ao fazer login":

**Verificar:**
1. Backend está rodando?
   ```powershell
   # Deve mostrar: 🚀 Sabixão backend rodando em http://localhost:3001
   ```
   
2. IP está correto no `environment.ts`?
   ```typescript
   apiUrl: 'http://10.0.2.2:3001/api'  // ✅ Correto para emulador
   ```

3. Após qualquer mudança:
   ```bash
   ionic build
   npx cap sync android
   # Depois: Run ▶️ no Android Studio
   ```

---

## 📍 Você está aqui:
```
✅ Backend rodando
✅ IP configurado (10.0.2.2)
✅ Build feito
✅ Sync feito
➡️ PRÓXIMO: Abrir Android Studio e rodar ▶️
```

---

## 🎯 Caminho do Projeto Android:
```
C:\sabixao\mobile\android
```

**Cole esse caminho no Android Studio quando clicar em "Open"**

---

## ⏱️ Tempo Estimado:
- Gradle build (primeira vez): 5-10 min
- Criar emulador: 2-5 min
- Iniciar emulador: 1-2 min
- Instalar app: 30 seg - 1 min

**Total: ~10-20 minutos na primeira vez**  
**Próximas vezes: ~2-3 minutos**

---

**🚀 Tudo pronto! Agora é só abrir o Android Studio!**
