from flask import Flask, render_template, redirect, request, flash
import fundamentus
df = fundamentus.get_resultado()
lista = []
dy = {}
pvp = {}
pl = {}
liq2m = {}
for c in df.index:
    if df.loc[c]['dy'] > 0.07 and df.loc[c]['pvp'] < 1 and df.loc[c]['pl'] < 6 and df.loc[c]['pl'] > 0 and df.loc[c]['liq2m'] > 1500000:
        lista.append(c)
        dy[c] = float(df.loc[c]['dy'])
        pvp[c] = float(df.loc[c]['pvp'])
        pl[c] = float(df.loc[c]['pl'])
        liq2m[c] = float(df.loc[c]['liq2m'])
app = Flask(__name__)

@app.route('/analise.html')
def analise():
    return render_template('analise.html', nomes=lista, dy=dy, pvp=pvp, pl=pl,liq2m=liq2m)
@app.route('/graficos.html')
def grafico():
    return render_template('graficos.html')

@app.route('/index.html')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)
