const express = require('express')
const app = express()
const fs = require('fs')
const porta = 3001

app.get('/', (req, res)=>{
    fs.readFile('home.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

app.get('/carregadorIphone', (req, res)=>{
    fs.readFile('carregadorIphone.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

app.get('/carregadorUniversal', (req, res)=>{
    fs.readFile('carregadorUniversal.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

app.get('/foneDeOuvido', (req, res)=>{
    fs.readFile('foneDeOuvido.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

app.get('/suporte', (req, res)=>{
    fs.readFile('suporte.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

app.listen(porta, ()=>{console.log('servidor rodando')})