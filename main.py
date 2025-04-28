from flask import Flask, render_template, redirect, request, flash
import fundamentus
df = fundamentus.get_resultado()
lista = []
dy = {}
pvp = {}
pl = {}
roe = {}
for c in df.index:
    if df.loc[c]['dy'] > 0.07 and df.loc[c]['pvp'] < 1 and df.loc[c]['pl'] < 6 and df.loc[c]['pl'] > 0 and df.loc[c]['roe'] > 0.15:
        lista.append(c)
        dy[c] = float(f"{df.loc[c]['dy']:.2f}")
        pvp[c] = float(f"{df.loc[c]['pvp']:.2f}")
        pl[c] = float(f"{df.loc[c]['pl']:.2f}")
        roe[c] = float(f"{df.loc[c]['roe']:.2f}")
app = Flask(__name__)

@app.route('/analise.html')
def analise():
    return render_template('analise.html', nomes=lista, dy=dy, pvp=pvp, pl=pl,roe=roe)
@app.route('/graficos.html')
def grafico():
    return render_template('graficos.html')
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/index.html')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)
