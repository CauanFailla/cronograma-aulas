function carre() {
    let atual = new Date()
    let dia =  atual.getDay()

    let tit = document.querySelector('.dsem')
    let m1 = document.querySelector('.mate1')
    let m2 = document.querySelector('.mate2')
    let m3 = document.querySelector('.mate3')
    let m4 = document.querySelector('.mate4')
    let m5 = document.querySelector('.mate5')
    let m6 = document.querySelector('.mate6')
    let m7 = document.querySelector('.mate7')
    let m8 = document.querySelector('.mate8')

    switch (dia) {
        case 1:
            tit.innerHTML = `Segunda-Feira`

            m1.innerHTML = `Prat.Corp`
            m2.innerHTML = `Prat.Corp`

            m3.innerHTML = `Res.Formação`
            m4.innerHTML = `Res.Formação`

            m5.innerHTML = `Tradições`
            m6.innerHTML = `Tradições`

            m7.innerHTML = `Portugues`
            m8.innerHTML = `Portugues`
            break

        case 2:
            tit.innerHTML = `Terça-Feira`

            m1.innerHTML = `Clube`
            m2.innerHTML = `Inglês`

            m3.innerHTML = `Inglês`
            m4.innerHTML = `Historia`

            m5.innerHTML = `Historia`
            m6.innerHTML = `PV`

            m7.innerHTML = `PV`
            m8.innerHTML = `Matematica`
            break
        case 3:
            tit.innerHTML = `Quarta-Feira`

            m1.innerHTML = `Cultura/Sent`
            m2.innerHTML = `Cultura/Sent`

            m3.innerHTML = `Portugues`
            m4.innerHTML = `Matematica`

            m5.innerHTML = `Matematica`
            m6.innerHTML = `Ed.Fisica`

            m7.innerHTML = `Dial/Lite`
            m8.innerHTML = `Dial/Lite`
            break
        case 4:
            tit.innerHTML = `Quinta-Feira`
            m1.innerHTML = `Fisica`
            m2.innerHTML = `Fisica`

            m3.innerHTML = `Sociologia`
            m4.innerHTML = `Sociologia`

            m5.innerHTML = `Filosofia`
            m6.innerHTML = `Filosofia`

            m7.innerHTML = `Quimica`
            m8.innerHTML = `Quimica`
            break
        case 5:
            tit.innerHTML = `Sexta-Feira`

            m1.innerHTML = `Geografia`
            m2.innerHTML = `Geografia`

            m3.innerHTML = `Tutoria`
            m4.innerHTML = `OE`

            m5.innerHTML = `OE`
            m6.innerHTML = `Tecnologia`

            m7.innerHTML = `Biologia`
            m8.innerHTML = `Biologia`
            
            break
        case 6:
            tit.innerHTML = `Sabado`
            m1.innerHTML = `Sem Aula`
            break
        case 7:
            tit.innerHTML = `Domingo`
            m1.innerHTML = `Sem aula`
            break
        default:
            tit.innerHTML = `[ERRO] dia da semana invalido!`
            break
    }
}