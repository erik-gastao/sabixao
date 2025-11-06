# Script para liberar porta 3001 no Firewall do Windows
# Execute este arquivo com botão direito -> "Executar com PowerShell"
# OU abra PowerShell como Administrador e execute:
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
# .\liberar-firewall.ps1

Write-Host "=== Liberando porta 3001 no Firewall ===" -ForegroundColor Green

try {
    New-NetFirewallRule -DisplayName "Sabixao Backend - Porta 3001" `
                        -Direction Inbound `
                        -LocalPort 3001 `
                        -Protocol TCP `
                        -Action Allow `
                        -ErrorAction Stop
    
    Write-Host "✓ Porta 3001 liberada com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Agora o seu celular pode acessar o backend em:" -ForegroundColor Yellow
    Write-Host "http://192.168.3.155:3001" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Teste no navegador do celular:" -ForegroundColor Yellow
    Write-Host "http://192.168.3.155:3001/health" -ForegroundColor Cyan
    
} catch {
    Write-Host "✗ Erro ao liberar porta!" -ForegroundColor Red
    Write-Host "Execute este script como Administrador!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Como executar como Administrador:" -ForegroundColor Yellow
    Write-Host "1. Clique com botão direito no PowerShell" -ForegroundColor White
    Write-Host "2. Selecione 'Executar como Administrador'" -ForegroundColor White
    Write-Host "3. Execute: cd C:\sabixao" -ForegroundColor White
    Write-Host "4. Execute: .\liberar-firewall.ps1" -ForegroundColor White
}

Write-Host ""
Write-Host "Pressione qualquer tecla para sair..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
