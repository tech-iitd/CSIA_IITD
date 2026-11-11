@echo off
setlocal
cd /d "%~dp0"

echo Starting the CSIA Department website...
where node >nul 2>nul
if errorlevel 1 goto no_node
where npm >nul 2>nul
if errorlevel 1 goto no_npm

if not exist "node_modules\vite\bin\vite.js" (
  echo Dependencies are missing. Installing them now...
  call npm install
  if errorlevel 1 goto install_failed
)

call npm run dev
if errorlevel 1 goto server_failed
goto end

:no_node
echo Node.js is not installed. Install Node.js 22.12 or newer, then run this file again.
pause
exit /b 1

:no_npm
echo npm was not found. Reinstall Node.js 22.12 or newer with npm included, then try again.
pause
exit /b 1

:install_failed
echo Dependency installation failed. Check your internet connection and npm output above.
pause
exit /b 1

:server_failed
echo The local server could not start. Check the error above. If a browser permission or firewall prompt appeared, follow it.
pause
exit /b 1

:end
endlocal