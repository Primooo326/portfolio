import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  typeCompleted = false
  ngOnInit(): void {
    const bienvenida =[
      'Estoy muy contento de que hayas venido aquí para descubrir más sobre mí y mis habilidades como desarrollador web.',
      'En mi portafolio, encontrarás una descripción detallada de mis habilidades, experiencia y logros, además de ejemplos de proyectos anteriores.',
    'Si tienes alguna pregunta, no dudes en contactarme.','¡Espero que disfrutes explorando mi portafolio!&#128526;&#9996;&#10024;&#128523;^10000']
    const acercaDeMi = [
      'Soy un desarrollador web entusiasta de 20 años, con estadia en Colombia. Soy un estudiante de ingeniería en informática, y me he desempeñado como desarrollador web por varios años. Me considero una persona creativa, curiosa y apasionada por la tecnología. He tenido la oportunidad de trabajar en una variedad de proyectos web, desde desarrollos a medida hasta aplicaciones web, y eso me ha permitido adquirir una gran cantidad de experiencia y conocimiento. Me gusta estar involucrado en el proceso de desarrollo desde el principio hasta el final, y me esfuerzo para entregar un trabajo de calidad. Mis habilidades principales como desarrollador web se centran en la programación en HTML, CSS y JavaScript, así como en el manejo de bases de datos. También tengo experiencia en la creación de aplicaciones web con frameworks como Angular. Estoy interesado en aprender y desarrollar nuevas habilidades y herramientas. Me gusta compartir mis conocimientos y experiencias con otros desarrolladores web, así como participar en el desarrollo de proyectos colaborativos. Me divierto mucho trabajando en proyectos que me permiten probar mis habilidades y ampliar mis conocimientos. En mi tiempo libre, me gusta practicar skateboarding, jugar videojuegos y ver películas. También me gusta pasar tiempo con mi familia y amigos.^200000'
    ]
    var options = {
      strings: bienvenida,
      typeSpeed: 30,
      loop:true,
      smartBackspace: true,
    };

    var typed = new Typed('#typed', options);
    var aboutMeTyped = new Typed('#aboutMeTyped', {
      strings: acercaDeMi,
      typeSpeed: 0,
      loop:true,
      smartBackspace: true,
    });
    typed
    aboutMeTyped
  }
}
