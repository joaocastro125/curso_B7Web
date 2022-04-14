nessa parte do codigo mostra as dimenções do codigo 

tem uma propriedade do js que mostra a altura -A propriedade HTMLElement.offsetHeight é somente leitura e retorna um valor do tipo inteiro a altura de um elemento incluindo  padding-top+padding-bottom+border-top+border-bottom.

Normalmente, um elemento offsetHeight é uma medida em pixels da altura CSS do elemento, incluindo borda, preenchimento e a barra de rolagem horizontal do elemento (se presente, se renderizada).

Para o objeto do corpo do documento, a medição inclui a altura total do conteúdo linear em vez da altura CSS do elemento. Elementos flutuantes que se estendem abaixo de outro conteúdo linear são ignorados.

e outra é :A propriedade HTMLElement.offsetWidth é de somente leitura e retorna a largura de um elemento no layout.  Normalmente, o offsetWidth é uma medida que inclui as bordas do elemento, seu padding horizontal e o vertical scrollbar (se presente e renderizado) e também a largura CSS do elemento.


tem outras propriedades mais funciona diferente -A Element.clientWidth propriedade é zero para elementos embutidos e elementos sem CSS; caso contrário, é a largura interna de um elemento em pixels. Inclui preenchimento, mas exclui bordas, margens e barras de rolagem verticais (se houver).    

A propriedade de somente leitura Element.scrollWidth retorna a largura em pixels do conteúdo de um elemento ou a largura do elemento em si, o que for maior. Se o elemento for mais amplo do que a área de conteúdo (por exemplo, se houver barras de rolagem para percorrer o conteúdo), o scrollWidth é maior do que o clientWidth.
