@echo off
setlocal enabledelayedexpansion

REM Defina o contador inicial
set count=10

REM Navegue até o diretório onde estão os arquivos
for %%f in (IMG_*.jpg) do (
    REM Renomeia os arquivos para Foto_<número>.jpg
    ren "%%f" "Foto_!count!.jpg"
    set /a count+=1
)

echo Todos os arquivos foram renomeados!
pause