const NAVIGATION_EVENT = 'pushstate'
// Creo una función para navegar entre páginas, lo que va a hacer es cambiar la URL de la barra de direcciones 
export function navigate(href){
  //Con el primer parámetro paso data entre URLs.
  window.history.pushState({},'',href) //El objeto history nos permite cambiar la URL de la página, con el pushState lo que hacemos es evitar que se recargue la página entera, sino que solo la URL.
  const navigationEvent = new Event(NAVIGATION_EVENT) //Se crea un evento para poder avisar que se cambió la URL
  window.dispatchEvent(navigationEvent)
  //Las últimas 2 líneas las hago para poder escuchar y enviar el evento pushState, ya que no se puede hacer de forma nativa.
}