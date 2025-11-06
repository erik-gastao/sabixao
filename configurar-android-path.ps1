# Script para configurar variáveis de ambiente do Android
# Execute como Administrador

Write-Host "=== Configurando Android SDK ===" -ForegroundColor Green

$androidHome = "C:\Users\$env:USERNAME\AppData\Local\Android\Sdk"

# Verificar se SDK existe
if (Test-Path $androidHome) {
    Write-Host "✓ Android SDK encontrado em: $androidHome" -ForegroundColor Green
    
    # Configurar ANDROID_HOME (variável do sistema)
    Write-Host "`nConfigurando ANDROID_HOME..." -ForegroundColor Yellow
    [System.Environment]::SetEnvironmentVariable('ANDROID_HOME', $androidHome, 'Machine')
    
    # Adicionar ao PATH (variável do sistema)
    Write-Host "Adicionando platform-tools ao PATH..." -ForegroundColor Yellow
    $platformTools = "$androidHome\platform-tools"
    $tools = "$androidHome\tools"
    $cmdlineTools = "$androidHome\cmdline-tools\latest\bin"
    
    $currentPath = [System.Environment]::GetEnvironmentVariable('Path', 'Machine')
    
    if ($currentPath -notlike "*$platformTools*") {
        [System.Environment]::SetEnvironmentVariable('Path', "$currentPath;$platformTools", 'Machine')
        Write-Host "✓ platform-tools adicionado ao PATH" -ForegroundColor Green
    }
    
    if ($currentPath -notlike "*$tools*") {
        [System.Environment]::SetEnvironmentVariable('Path', "$currentPath;$tools", 'Machine')
        Write-Host "✓ tools adicionado ao PATH" -ForegroundColor Green
    }
    
    Write-Host "`n=== Configuração Concluída ===" -ForegroundColor Green
    Write-Host "`nIMPORTANTE: Feche e abra um NOVO terminal para as mudanças terem efeito!" -ForegroundColor Yellow
    Write-Host "`nDepois, teste com: adb version" -ForegroundColor Cyan
    
} else {
    Write-Host "✗ Android SDK não encontrado!" -ForegroundColor Red
    Write-Host "Instale o Android Studio primeiro." -ForegroundColor Yellow
}
