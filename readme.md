# Study biome 

## 🚀 Objetivo

O objetivo principal foi testar superficialmente e entender como funciona a biblioteca do biome e checar a diferença dele para o eslint e o prettier.

## 📖 Relato

A configuração da biblioteca em si foi tranquila porem não estava executando a formatação nos arquivos do typescript que seria a função do prettier, então procurando nas net foi descoberto que a questão da formatação esta na configuração do próprio vscode.

```
- Setting.json
{
	"editor.codeActionsOnSave": {
		"source.organizeImports.biome": "always"
	},
	"[typescript]": {
		"editor.defaultFormatter": "biomejs.biome"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "biomejs.biome"
	}
}

```
### Extensão
A extensão necessária é a:
  - "Biomejs"


---

👨‍💻 Desenvolvido com muita garra por [Weslley Ferreira de Moraes](https://www.linkedin.com/in/weslleyferreira/).