import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  introduction: string = 'Meu Portfólio';
  name: string = 'Cristian Mitidieri Carvalhal.';
  faculdade: string = 'SENAC.';
  curso: string = 'Técnico de Informática voltada para WEB.';
  objetivo: string = 'Pretendo terminar o curso de TI e ingressar em uma faculdade de Ciência da Computação para trabalhar como Web Developer ou na área da Segurança da Informação.';
  skills = ['HTML', ' CSS', ' Java', ' PHP', ' JavaScrtipt', ' Python', ' SQL.'];
  progress = ['Angular', ' WordPress'];
  experiences: string = ' Sou formado em Ciências Econômicas, Direito e atualmente trabalho como Desenvolvedor Web.';



  constructor() { }

  ngOnInit(): void {
  }

}
