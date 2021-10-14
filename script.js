let story = [
  '¿Qué hora es? Debería levantarme ya para no llegar tarde al trabajo, mi jefe ha estado mucho más insoportable estos días. Pero primero que todo, un baño para despertarme... Huele delicioso, debe ser el desayuno.',
  {
    text: 'Ahora sí, hoy es un día importante en el trabajo, por fin tenemos audiencia con los proveedores chinos, debo encantarlos con mi propuesta. ¿Qué camisa debería usar?, ¿la roja o la azul?',
    options: ['Roja', 'Azul'],
    continuation: {
      0: [],
      1: [],
    },
  },
  'No hay mayor felicidad que bajar a la cocina una mañana y ver a mi hermosa familia. Mi esposa y mis dos hijos. Ellos significan todo para mí, y son mi inspiración para levantarme cada día. “Gracias por encargarte hoy del desayuno”, le dije luego de darle un beso en su frente.',
  {
    text: 'Por mi culpa vamos un poco tarde, debo dejar a los niños en la escuela y el auto de mi esposa está dañado entonces también debo dejarla en su trabajo. ¿Debería comer el gallo pinto que ella preparó, o un cereal rápido para ahorrar tiempo?',
    options: ['Pinto', 'Cereal'],
    continuation: {
      0: [],
      1: [],
    },
  },
  'Rápido niños, mamá y papá deben llegar al trabajo y ustedes a la escuela, ¿ya tienen todo? No olviden sus tareas ni la lonchera. ¡Ya nos vamos!',
  'Después de todo el apuro en la mañana, ir en el carro con mi familia es un momento que aprecio mucho, pusimos música y hablamos un rato, los niños siempre van viendo por la ventana. ¡Ay no! Una llamada de mi jefe, no le contestare, trataré de manejar más rápido debo llegar a tiempo a la audiencia. ',
  'A Lucía no le gusta mucho que maneje rápido, pero hoy realmente necesito llegar, de eso depende mi ascenso en el trabajo, a los niños sí que les divierte que maneje rápido. ¡Ay no mi jefe otra vez! Le escribiré que llego en 10 minutos, a esa hora nos dará tiempo perfecto de presentar la propuesta. ¡Niños por favor siéntese, no pueden ir jugando allá atrás! De pronto, solo escuché cuando Lucía gritó ¡Mirá al frente! ',
  '¿Qué sucedió? Solo recuerdo que cuando Lucía gritó, vi al frente iba en el carril contrario, se que traté de esquivar los carros, pero después de ahí no sé qué pasó. Tenía muchas cosas en mi mente. Doctor, ¿Cómo están mis hijos y mi esposa? ¿Dónde están?',
  'Físicamente me siento bien, no sufrí ninguna lesión. Pero por dentro, me siento devastado,  me acaban de dar la peor noticia de mi vida, mis hijos, lo más importante para mi, no sobrevivieron al accidente. Y Lucía está realmente grave, se encuentra internada. Todo fué mi culpa, si me hubiera despertado más temprano, no hubiera manejado tan rápido, ni siquiera presenté mi propuesta a los proveedores, mis hijos no llegaron a clases, fue mi culpa que perdieran su vida, sus sueños. Y mi esposa, el amor de vida, está sufriendo. Debió pasarme a mí, debí morir yo. ',
  'Ya han pasado 4 meses del accidente, aún no lo puedo creer. Extraño a mis hijos, su pérdida nunca la podré asimilar y mi esposa aún sigue internada, me siento solo en todo esto. Se han gastado los medicamentos que Lucía toma en las mañanas, debo conseguirlos. ',
  {
    text: 'El solo ver un volante aún me aterra, me sudan las manos y mi mente no logra procesar aún lo que pasó ese día; sin embargo, mi esposa de verdad necesita los medicamentos. ¿Debería afrontar mi miedo e ir manejando, o aun no estoy listo y mejor camino?',
    options: ['Manejar', 'Caminar'],
    continuation: {
      0: [
        'La farmacia está a un par de kilómetros, además esa calle no es tan transitada, creo que puedo manejar hasta ahí, comprar los medicamentos y regresar. Me siento un poco nervioso, me sudan las manos y se me resbala el volante, me asusto con cada sonido de la carretera, manejé realmente despacio, pero logré conseguir los medicamentos',
        'Todas las noches cuando me acuesto, me es difícil conciliar el sueño, realmente estoy muy cansado y ya es tarde, trataré de dormir. ',
        'Llevaba muchos días sin dormir como anoche, pude descansar mejor, no tuve pesadillas y mi mente estaba más tranquila. Claro, es imposible no pensar en mis hijos y el estado de Lucía, pero ayer traté de enfocarme en descansar. Hoy tengo una sesión de terapia, será la primera sesión. Me han recomendado que esto me ayudará. ',
        'No resisto las preguntas, no quiero hablar de lo que sucedió, no quiero traer a mi mente de nuevo las imágenes del accidente, no sé si la terapia realmente funcione para mi, no quiero contarle a nadie como me siento, lo superaré solo.',
        {
          text: 'Quiero irme, esto no va a funcionar, quiero regresar a casa y que nada nunca haya pasado. Pero sé que sí sucedió. Bueno quizá deba quedarme, y ver cómo me siento al finalizar la sesión. ¿Debería quedarme a terminar la sesión con la psicoterapeuta o debería irme y no regresar?',
          options: ['Quedarme', 'Irme'],
          continuation: {
            0: [
              {
                text: 'Decidí intentarlo, realmente quiero continuar con mi vida y estar al lado de Lucía, enfrentar esto juntos y mejorar cada día. Cuando terminó la sesión me sentí bien, agendé otra cita para la próxima semana, creo que esto me ayudará. Entendí que es un proceso y está bien querer llorar. Ahora llevo 5 meses en terapia, Lucía ya se recuperó de sus lesiones, ella ha comenzado a venir a terapia conmigo,  yo he empezado a dormir mejor, ya no me siento alterado en la carretera, y siento que vamos por buen camino. ',
                end: true,
                ending: 0,
              },
            ],
            1: [
              {
                text: 'Mejor me fuí, le dije a la psicoterapeuta que eso no era para mi, que pronto se me quitará esto que siento, lo haré solo, no quiero que nadie me escuche. No quiero hablar con nadie, solo trataré de olvidar todo lo que pasó. No regresaré a terapia. Me siento un poco alterado, pero esto va a cambiar. ¿Debería ir manejando, o mejor camino?',
                options: ['Manejar', 'Caminar'],
                continuation: {
                  0: [
                    {
                      text: 'Manejar es una buena opción, ya lo hice una vez, y lo hice sin ayuda de nadie, no necesito que la gente sepa cómo me siento. Iré un poco más rápido, me tiemblan las manos, no sé si debí irme de la sesión, y si realmente me hubiera ayudado. ¿Mejor regreso? No no, ya estoy aquí iré a mi casa, no puedo contener las lágrimas, solo deseo que nada nunca hubiera sucedido, no puedo sostener el volante, no veo nada…., me asusté, perdí el control del carro, di varias vueltas y me volqué, no sentí más mi cuerpo. Lucía se preguntaba por mí, pero nunca regresé a casa, mi vida terminó. ',
                      end: true,
                      ending: 1,
                    },
                  ],
                  1: [
                    {
                      text: 'Ya pasaron varios meses, quizá unos 6 meses desde que intenté ir a terapia, aquella vez regresé caminando a casa. Fue mi culpa que todo esto sucediera. Desde ese día he estado tomando, creo que vengo a tomar todos los días, no sé cuántas horas pasó aquí pero al menos 4. Lucía ya se recuperó de sus lesiones, y lleva unos 4 meses en terapia, ella no quiere hablar conmigo, creo que la he alejado de mí, yo nunca le conté cómo me sentía, no quise hablar con ella, pasaba días sin ir a la casa, creo que la perdí a ella también.',
                      end: true,
                      ending: 2,
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      1: [
        'Creí que caminar sería lo mejor, y realmente lo fue… hasta que vi a esos niños jugando en la acera, juro que por un momento vi la cara de mis hijos, escuché sus voces diciendo mi nombre, pero nada era real. Comencé a sudar, ver borroso y mis pies ya no funcionaban. Fui cobarde, volví corriendo a mi casa, y ni siquiera conseguí las pastillas de Lucía.',
        'No logro dormir bien, doy vueltas de un lado hacia otro, no puedo dejar de pensar en esos niños jugando, y tampoco puedo perdonarme el no haber sido capaz de comprar esas pastillas… Lucía debe odiarme... Lucía estaría mejor sin mí… Soy un pésimo esposo, y fui el peor padre…',
        'Pasé una noche pésima, pero al menos ya terminó; estoy más tranquilo. Hoy tengo una cita con mi psicoterapeuta, me la han recomendado por meses pero la he pospuesto poco a poco, aún ahora no estoy seguro de ir, ¿estoy buscando excusas para evitar buscar ayuda?',
        {
          text: 'Estaba a punto de salir, pero mi esposa comenzó a estornudar más, el doctor nos habló sobre las posibles complicaciones durante su proceso de recuperación. ¿Debería ir a la cita con la psicoterapeuta o quedarme y cuidar de Lucía?',
          options: ['Ir al Psicoterapeuta', 'Quedarse con Lucía'],
          continuation: {
            0: [
              'Venir aquí fue la mejor decisión que pude haber tomado, debí haber buscado ayuda profesional desde hace tanto. No es fácil, y me tomará mucho tiempo, pero poco a poco logró aceptar que quizá no fue mi culpa.',

              {
                text: 'En estos meses me he dado la oportunidad de crecer y sanar las heridas que por mucho tiempo oculté; fui egoísta y olvidé que no estaba solo en este duelo. Lucía y yo hemos superado tanto juntos y el apoyo que nos damos el uno al otro es lo que nos impulsa a mejorar. Después de haberme culpado, haberme odiado, y haberme alejado de las personas que me amaban, nuevamente siento que puedo volver a ser feliz.',
                end: true,
                ending: 3,
              },
            ],
            1: [
              'He cuidado toda la tarde de Lucía, y mejoró un poco; a pesar de no haber conseguido los medicamentos, aún quedaban un par de pastillas que sirvieron para aliviar el dolor. Pero mientras la veo a ella ponerse mejor y seguir adelante; yo aún ni siquiera puedo dormir bien, incluso manejar o hablar sobre mis hijos.',
              {
                text: 'Pasaron meses, y me negué a aceptar todo lo que me ha pasado, y es que realmente me lo merezco; no fui capaz de salvar a mis hijos, ni mi matrimonio, no he visto la cara de Lucía desde que me dejó… ¿Cómo pudo seguir adelante después de todo? No es justo, simplemente no lo es. Estas botellas siguen vaciándose y vaciándose, pero ninguna de ellas me devolverá mi vida… o las ganas de seguir viviéndola...',
                end: true,
                ending: 4,
              },
            ],
          },
        },
      ],
    },
  },
];

let choosing_index = 0;
let autoplay = true;

$('#controls').click(() => {
  if (autoplay) {
    autoplay = false;
    $('#controls').addClass('off');
  } else {
    autoplay = true;
    $('#controls').removeClass('off');
  }
});

$('#start_point').click(function () {
  document.querySelector('#start_point').style.animation =
    'fade_out 1s forwards';
  start_story(7500, 0);
});

function start_story(ms, start) {
  if (typeof story[start] == 'string') {
    $('body').append(`
      <div class='center_container' id='s${start}'>
        <p class='f32 margin-side'>${story[start]}</p>
      </div>
    `);
    $('html, body').animate({ scrollTop: $(document).height() }, 2000);
    if (start + 1 < story.length) {
      if (autoplay) {
        setTimeout(() => {
          start_story(ms, start + 1);
        }, ms);
      } else {
        $('#s' + start).addClass('cursor');
        $('#s' + start).click(() => {
          start_story(ms, start + 1);
        });
        if (start > 0) {
          $('#s' + start - 1).unbind();
        }
      }
    }
  } else {
    if (story[start].end) {
      console.log(story[start]);
      $('body').append(`
      <div class='center_container' id='s${start}'>
      <h1 class="f24">Final.</h1>
        <p class='f32 margin-side'>${story[start].text}</p>
        <div style='text-align: center;'>
          <p class='selection-button f24' id='end_story'>Continuar</p>
      </div>    `);
      $('#end_story').click(() => {
        end_story(story[start].ending);
      });
      $('html, body').animate({ scrollTop: $(document).height() }, 2000);
    } else {
      $('body').append(`
      <div class='center_container' id='s${start}'>
        <p class='f32 margin-side'>${story[start].text}</p>
        <div style='text-align: center;'>
          <p class='selection-button f24' id='d${choosing_index}${0}'>${
        story[start].options[0]
      }</p>
          <p class='selection-button f24' id='d${choosing_index}${1}'>${
        story[start].options[1]
      }</p>
          <p id='d${choosing_index}' class='selection_done f24'></p>
        </div>
      </div>
;    `);
      $('#d' + choosing_index + 0).click(() => {
        choosing(
          choosing_index,
          story[start],
          '0',
          story[start].options[0],
          start,
          ms
        );
      });
      $('#d' + choosing_index + 1).click(() => {
        choosing(
          choosing_index,
          story[start],
          '1',
          story[start].options[1],
          start,
          ms
        );
      });
      $('html, body').animate({ scrollTop: $(document).height() }, 2000);
    }
  }
}

function choosing(index, currentQuestion, selection, text, next, ms) {
  $('#d' + index + '0').hide();
  $('#d' + index + '1').hide();
  $('#d' + index).html(text);
  if (currentQuestion.continuation[selection].length > 0) {
    currentQuestion.continuation[selection].forEach((x) => {
      story.push(x);
    });
  }
  choosing_index++;
  if (next + 1 < story.length) {
    setTimeout(() => {
      start_story(ms, next + 1);
    }, ms * (1 / 10));
  }
}

function end_story(ending) {
  $('body').html('');
  $('html, body').animate({ scrollTop: 0 }, 2000);
  let final_message = '';
  switch (ending) {
    case 0:
      final_message =
        'En ocasiones hay eventos en la vida que cambian el rumbo de la misma, dejan una marca, un vacío o un dolor, como es el caso de nuestro protagonista. Recibir ayuda profesional es de suma importancia, ya que esto brinda soporte y apoyo emocional, nos enseña herramientas para manejar las diversas situaciones de la vida y ofrece un espacio para expresarnos, además hablar de cómo nos sentimos puede contribuir a aceptar la situación y recuperar nuestra confianza, estabilidad emocional y continuar adelante. Recuerda que no estás solo, expresa cómo te sientes porque tus sentimientos importan. Tú importas.';
      break;
    case 1:
      final_message =
        'Así como nuestro protagonista, existen miles de ejemplos de cómo un evento o época de nuestras vidas puede marcarnos de manera permanente. Se estima que el 4.4% de la población mundial sufre de depresión, una enfermedad que debe recibir tanta atención como cualquier otra, y que lamentablemente no tiene piedad con quienes la padecen. Es necesario unirnos como compañeros, como familiares, como seres humanos, para prevenir desenlaces como el de nuestro personaje. La salud mental importa. Tú importas.';
      break;
    case 2:
      final_message =
        'Así como nuestro protagonista, existen miles de ejemplos de cómo un evento o época de nuestras vidas puede marcarnos de manera permanente. Se estima que el 4.4% de la población mundial sufre de depresión, una enfermedad que debe recibir tanta atención como cualquier otra, y que lamentablemente no tiene piedad con quienes la padecen. Es necesario unirnos como compañeros, como familiares, como seres humanos, para prevenir desenlaces como el de nuestro personaje. La salud mental importa. Tú importas.';
      break;
    case 3:
      final_message =
        'En ocasiones hay eventos en la vida que cambian el rumbo de la misma, dejan una marca, un vacío o un dolor, como es el caso de nuestro protagonista. Recibir ayuda profesional es de suma importancia, ya que esto brinda soporte y apoyo emocional, nos enseña herramientas para manejar las diversas situaciones de la vida y ofrece un espacio para expresarnos, además hablar de cómo nos sentimos puede contribuir a aceptar la situación y recuperar nuestra confianza, estabilidad emocional y continuar adelante. Recuerda que no estás solo, expresa cómo te sientes porque tus sentimientos importan. Tú importas.';
      break;
    case 4:
      final_message =
        'Así como nuestro protagonista, existen miles de ejemplos de cómo un evento o época de nuestras vidas puede marcarnos de manera permanente. Se estima que el 4.4% de la población mundial sufre de depresión, una enfermedad que debe recibir tanta atención como cualquier otra, y que lamentablemente no tiene piedad con quienes la padecen. Es necesario unirnos como compañeros, como familiares, como seres humanos, para prevenir desenlaces como el de nuestro personaje. La salud mental importa. Tú importas.';
      break;
  }
  final_message +=
    ' <span id="reload" style="cursor: pointer;"><i><strong>¿Qué tal si intentamos conseguir otro final?</strong></i></span>';
  let final_template = `
    <div style='animation: fade_in 1s forwards'>
      <h1 class='f24 margin-side' style='margin-top: 5%;'>Un mensaje sobre este final </h1>
      <p class='f24 margin-side' style='margin-top: 15px;'>${final_message}</p>
      <h1 class='f24 margin-side' style='margin-top: 5%;'>Sello Azul</h1>
      <p class='f24' style='margin-top: 15px;'>Para hacer válido esta participación como un sello, debes llenar <a href=' https://forms.office.com/r/EP5Mr4tKyS' target='_blank'><strong>este formulario</strong><a/>.</p>
      <h1 class='f24 margin-side' style='margin-top: 5%;'>Instituciones de Salud Mental</h1>
      <p class='f24 margin-side' style='margin-top: 5px;'>Fundarevi (Fundación Rescatando Vidas) - 2268-1098 / 8715-0551</p>
      <p class='f24 margin-side' style='margin-top: 5px;'>Aceps - 4081-9326 / 2250-1508</p>
      <p class='f24 margin-side' style='margin-top: 5px;'>Fundamentes - 2256-0703</p>
      <p class='f24 margin-side' style='margin-top: 5px;'>Instituto WEM - 2225-7511 / 2234-273 </p>
      <p class='f24 margin-side' style='margin-top: 5px;'>Fundación AMY (Suicidio) - 8428-5211</p>
      <p class='f24 margin-side' style='margin-top: 5px;'>Aquí estoy (Suicidio) - 2272 3774</p>
      <h1 class='f24 margin-side' style='margin-top: 5%;'>Reconocimientos</h1>
      <p class='f24' style='margin-top: 15px;'>Historia por <strong>Sindy Ramírez</strong> y <strong>Christopher Buzo</strong>.</p>
      <p class='f24' style='margin-top: 5px'>Revisado por <strong>Keylor Vanega</strong> y <strong>Paula Ponce</strong>.</p>
      <p class='f24' style='margin-top: 5px; margin-bottom: 5%'>Programado por <strong>André López</strong>.</p>
      <p style='height: 25px'></p>
    </div>
  `;
  $('body').append(final_template);
  $('#reload').click(() => {
    location.reload();
  });
}
