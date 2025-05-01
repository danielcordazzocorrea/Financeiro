from flask import Flask, render_template, redirect, request, flash
import fundamentus
df = fundamentus.get_resultado()
lista = []
dy = {}
pvp = {}
pl = {}
liq2m = {}
app = Flask(__name__)
@app.route('/main', methods=['POST'])
def filtrar():
    for c in df.index:
        dyv = request.form.get('div')
        if dyv == '':
            dyv = 0
        else:
            dyv = float(dyv)
        print(dyv)
        if df.loc[c]['dy'] > dyv and df.loc[c]['pvp'] < 1 and df.loc[c]['pl'] < 6 and df.loc[c]['pl'] > 0 and df.loc[c]['liq2m'] > 1500000:
            lista.append(c)
            dy[c] = float(f"{df.loc[c]['dy']:.2f}")
            pvp[c] = float(f"{df.loc[c]['pvp']:.2f}")
            pl[c] = float(f"{df.loc[c]['pl']:.2f}")
            liq2m[c] = float(f"{df.loc[c]['liq2m']:.2f}")
    return render_template('analise.html', nomes=lista, dy=dy, pvp=pvp, pl=pl,liq2m=liq2m)
@app.route('/analise.html')
def analise():
    return render_template('analise.html', nomes=lista, dy=dy, pvp=pvp, pl=pl,liq2m=liq2m)
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
