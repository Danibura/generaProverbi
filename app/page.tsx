"use client";
import { useState } from "react";

const stringa = `A brigante, brigante e mezzo.
A buon cavaliere non manca lancia.
A buon cavallo non manca sella.
A buon cavallo non occorre dir trotta.
A buon intenditor poche parole.
A buon rendere.
A carnevale ogni scherzo vale.
A caval che corre, non abbisognano speroni.
A caval donato non si guarda in bocca.
A cavalier novizio, cavallo senza vizio.
A cavallo d'altri non si dice zoppo.
A cavallo di fuoco, uomo di paglia, a uomo di fuoco, cavallo di paglia.
A cavallo giovane, cavaliere vecchio.
A chi batte forte, si apron le porte.
A chi dai il dito, si prende anche il braccio.
A chi non vuol credere, poco valgono mille testimoni.
A chi non vuol credere sono inutili tutte le prove.
A chi non vuol far fatiche il terreno produce ortiche.
A chi poco non basta, niente basta.
A chi vive di rapina non c'è cosa che sia nociva.
A ciascuno l'arte sua, e le pecore ai lupi.
A ciascuno le proprie oche sembrano cigni.
A confessore, medico e avvocato non tener il ver celato.
A goccia a goccia si scava la roccia.
A menar il can per l'aia.
A mali estremi estremi rimedi.
A morire e a pagare c'è sempre tempo.
A muro basso ognuno ci si appoggia.
A ogni giorno la sua fatica.
A padre avaro figliuol prodigo.
A pagare e a morire c'è sempre tempo.
A pensar male si fa peccato, ma quasi sempre si indovina.
A quel che si vede metà si crede, a quel che si sente si crede niente.
A rubar poco si va in galera a rubar tanto si fa carriera.
A San Benedetto la rondine sotto il tetto.
A tavola non si invecchia.
A tutto c'è rimedio fuorché alla morte.
A usanza nuova non correre.
A' voli alti e repentini, sogliono i precipizi esser vicini.
Accade in un'ora, quel che non avviene in mille anni.
Accetta mille consigli, ma il tuo portalo avanti.
Acqua cheta rompe i ponti.
Acqua passata non macina più.
Ad ogni uccello il suo nido è bello.
Ad ognuno la sua croce.
Agosto: moglie mia non ti conosco.
Ai macelli van più bovi che vitelli.
Aiutati che Dio ti aiuta.
Aiutati che il ciel t'aiuta.
Al can vecchio non dir mai va' a cuccia.
Al contadino non far sapere quanto è buono il formaggio con le pere.
Al cuor non si comanda.
Al nemico che fugge ponti d'oro.
Al primo colpo non cade la quercia.
All'ultimo si contano le pecore.
Alla candelora dall'inverno semo fora, ma se piove o tira vento, dell'inverno semo dentro.
Al tempo, al culo e ai padroni, non si comanda.
Al tempo, ai matti e ai padroni non si comanda.
Altezza è mezza bellezza.
Altri tempi, altri costumi.v
A mali estremi, estremi rimedi.
Ambasciator non porta pena. Ambasciator non reca pena.
Amico mio cortese, secondo le entrate, fate le spese.
Amore di villeggiatura soltanto un mese dura.
Anche nei cenci piange il denaro.
Anche tra le spine nascono le rose.
Anno nevoso anno fruttuoso.
Anno nuovo vita nuova.
Aria rossa o la piscia o la soffia.
Arcobaleno, domani è sereno.
Asino di natura chi non sa legger la sua scrittura.
Assai domanda chi ben serve e tace.
Attacca l'asino dove vuole il padrone e, se si rompe il collo, suo danno.
Arrivata la gloria svanisce la memoria
Attacca la capra alla vigna, quello che ha fatto la mamma fà la figlia.
Avanzata inglese, ritirata spagnola.

Bacco, Tabacco e Venere riducono l'uomo in cenere.
Bandiera vecchia onor di capitano.
Batti il ferro finché è caldo.
Bella vigna poca uva.
Bello in fasce brutto in piazza.
Bell'ostessa, conto caro.
Beni di fortuna passano come la luna.
Bisogna andare quando il diavolo è alla coda.
Bisogna fare buon viso a cattivo gioco.
Bisogna mangiare per vivere, non vivere per mangiare.
Bocca che tace mal si può aiutare.
Botte buona fa buon vino.
Botte piccola fa buon vino.
Brutta di viso, sotto il paradiso.
Brutto in fasce bello in piazza.
Buon sangue non mente.
Buon seme dà buoni frutti.
Buon vino fa buon sangue.
Buon tempo e mal tempo non dura tutto il tempo.

Cambiano i suonatori, ma la musica è sempre quella.
Campa cavallo che l'erba cresce.
Cane che abbaia non morde.
Cane non mangia cane.
Cane vecchio non impara scherzi nuovi.
Carta canta e villan dorme.
Casa mia casa mia pur piccina che tu sia resti sempre casa mia.
Cavallo vecchio, tardi muta ambiatura.
Cane rabbioso, cane furioso.
Cavalier con quattro palle, il nemico ti è alle spalle.
Cavolo riscaldato e garzone ritornato, non fu mai buono.
Cavolo riscaldato, prete spretato, serva ritornata, fan la vita avvelenata.
Cento teste, cento cappelli.
Casa fatta e vigna sposa, non si paga quanto costa.
Cessato il guadagno, cessa l'amicizia.
Chi a credenza molte merci spaccia, un presto fallimento si procaccia.
Chi accarezza la mula, buscherà dei calci.
Chiacchiere di forno, perdenza di pane.
Chi ama me, ama il mio cane.
Chi ara terra bagnata, per tre anni l'ha dissipata.
Chi arrizza, appicca e ammazza.
Chi ben chiude, ben apre.
Chi ben coltiva il moro, coltiva nel suo campo un gran tesoro.
Chi ben comincia è a metà dell'opera.
Chi beve birra campa cent'anni.
Chi cava e non mette, le possessioni si disfanno.
Chi cento ne fa una ne aspetta.
Chi cerca trova e chi domanda intende.
Chi compra disprezza e chi ha comprato apprezza.
Chi ciuco si corica ciuco si ritrova.
Chi da gallina nasce convien che razzoli.
Chi di spada ferisce di spada perisce.
Chi di speranza vive disperato muore.
Chi dice donna dice danno.
Chi dice quel che vuole sente quel che non vorrebbe.
Chi disprezza compra. Chi compra sprezza. Chi disprezza vuol comprare.
Chi domanda ciò che non dovrebbe, ode quel che non vorrebbe. Chi cerca ciò che non dovrebbe, trova ciò che non vorrebbe.
Chi domanda non erra. Chi domanda non fa errore.
Chi dorme d'agosto, dorme a suo costo.
Chi dorme non piglia pesci.
Chi è causa del suo mal pianga se stesso.
Chi è in difetto è in sospetto.
Chi è svelto a mangiare è svelto a lavorare.
Chi fa altrui mestiere, fa la zuppa nel paniere.
Chi fa da sé fa per tre.
Chi fa falla e chi non fa sfarfalla.
Chi fa le fave senza concio, le raccoglie senza baccelli.
Chi fa più carezze che non suole, o t'ha gabbato o gabbar ti vuole.
Chi getta un seme l'ha da coltivare se vuol vederlo a tempo vegetare.
Chi ha bravo cuoco e amici sempre invita, se non ha buona entrata, ha buona uscita.
Chi ha carro e buoi fa bene i fatti suoi.
Chi ha dentro l'amaro non può sputare dolce.
Chi ha farina non ha la sacca.
Chi ha i denti non ha il pane e chi ha il pane non ha i denti.
Chi ha ingegno lo mostri.
Chi ha polvere spara.
Chi ha portata la tonaca puzza sempre di frate.
Chi ha tempo non aspetti tempo.
Chi ha tutto il suo in un loco, l'ha nel fuoco.
Chi la dura la vince.
Chi la fa l'aspetti.
Chi lascia la via vecchia per la nuova sa quel che lascia non sa quel che trova.
Chi lava il capo a l'asino perde il ranno e 'l sapone.
Chi il vasto mare intrepido ha solcato, talvolta in piccol rio muore annegato.
Chi in casa tua ti metti, ti caccerà di casa.
Chi mal semina mal raccoglie.
Chi mal vive mal muore.
Chi mangia salato cade sempre malato.
Chi mena per primo mena due volte.
Chi mendica non sceglie.
Chi molto parla spesso falla.
Chi mordere non può, non mostri i denti.
Chi muore tace echi vive si da pace.
Chi non risica non rosica.
Chi non sa fare insegna.
Chi non semina non raccoglie.
Chi non vuol stoppa arda, non l'accosti al fuoco.
Chi muore giace e chi vive si dà pace.
Chi nasce afflitto muore sconsolato.
Chi nasce è bello, chi si sposa è buono e chi muore è santo.
Chi nasce tondo non muore quadrato.
Chi non beve in compagnia o è un ladro o è una spia.
Chi non comincia non finisce.
Chi non crede in Dio, crede nel diavolo.
Chi non ha testa abbia gambe. Chi non ha testa abbia almeno buone gambe.
Chi non lavora non mangia.
Chi non mangia ha già mangiato. Chi non mangia ha ben mangiato.
Chi non muore si rivede.
Chi non rìsica, non ròsica.
Chi non sa fare, non sa comandare.
Chi non sa tacere, non sa parlare.
Chi non semina non raccoglie.
Chi non stima altri che sé, è felice quanto un re.
Chi pecora si fa, lupo se la mangia.
Chi per denaro s'è sposato, a vita sarà comandato.
Chi perde ha sempre torto.
Chi più ha più vuole.
Chi più ne ha più ne metta.
Chi più ne ha ne vuole.
Chi più sa meno crede.
Chi più spende meno spende.
Chi porta la moglie a ogni festa e il cavallo a bere a ogni fontana, alla fine dell'anno avrà il cavallo bolso e la moglie puttana.
Chi predica in diserto vi perde lo sermone.
Chi presta all'amico perde quello ed il denaro.
Chi presto parla, poco sa.
Chi prima arriva, meglio alloggia. Chi prima va al mulino macina.
Chi prima nasce prima pasce.
Chi prima non pensa in ultimo sospira.
Chi ride degli altri ha molto da imparare.
Chi ride il venerdì piange la domenica.
Chi rompe paga e i cocci sono suoi.
Chi ruba poco ruba assai.
Chi sa fa e chi non sa insegna. Chi sa fare fa e chi non sa fare insegna.
Chi sa il gioco non l'insegni. Chi sa il trucco non l'insegni.
Chi scopre il segreto perde la fede.
Chi semina buon grano, ha poi buon pane.
Chi semina con l'acqua, raccoglie col paniere.
Chi semina raccoglie.
Chi semina vento, raccoglie tempesta.
Chi serba serba al gatto.
Chi si accontenta gode.
Chi si attacca al poco, non esiterà a rubare molto.
Chi si aiuta Iddio l'aiuta.
Chi si assomiglia si piglia.
Chi si è scottato con l'acqua calda, ha paura anche di quella fredda.
Chi si fa i fatti suoi, campa cent'anni.
Chi si loda s'imbroda.
Chi si scusa si accusa.
Chi si vanta da solo non vale un fagiuolo.
Chi spera nell'altrui soccorso, mette il pelo più lungo [di quello] dell'orso.
Chi tace acconsente.
Chi tanto chi niente. Chi troppo chi niente.
Chi tardi arriva male alloggia.
Chi tiene il letame nel suo letamaio, fa triste il suo pagliaio.
Chi troppo domanda, ha testa di matto.
Chi troppo in alto sal, cade sovente precipitevolissimevolmente.
Chi troppo vuole nulla stringe.
Chi troppo stringe la corda, poi resta impiccato.
Chi trova un amico trova un tesoro.
Chi tutti sprezza, offende, insulta e sfida, pare che vada cercando uno che l'uccida.
Chi va a scuola, qualche cosa impara sempre.
Chi va a Roma perde la poltrona.
Chi va alla piazza dei dolori torna a casa con i suoi.
Chi va al mulino s'infarina.
Chi va con lo zoppo, impara a zoppicare.
Chi va piano va sano e va lontano.
Chi va piano va sano e va lontano. Chi va forte va incontro alla morte.
Chi va via perde il posto all'osteria. Chi va dall'osto, perde il posto. (Il padrone è ritornato e il posto va ridato.)
Chi vince ha sempre ragione.
Chi vivra, vedrà.
Chi vuol aver del mosto, zappi le viti d'agosto.
Chi vuol essere amato, divenga amabile.
Chi vuol far la contadina vesta il rosso col turchino.
Chi vuol impetrare, la vergogna ha da levare.
Chi vuole assai, non domandi poco.
Chi vuol di avena un granaio la sémini di febbraio.
Chi vuol lavoro degno, assai ferro e poco legno.
Chi vuol pane meni letame.
Chi vuol un bel pagliaio lo pianti di febbraio.
Chi vuol un pero ne ponga cento, e chi cento susini ne ponga uno solo.
Chi vuole i santi se li preghi.
Chi vuole vada e chi non vuole mandi.
Chiodo schiaccia chiodo. Chiodo scaccia chiodo.
Chirurgo giovane e medico anziano.
Ciascun dal proprio cuor l'altrui misura.
Cielo a pecorelle acqua a catinelle.
Ciò che impari da giovane non dimentichi da vecchio.
Ciò che s'usa non fa scusa.
Col fuoco non si scherza.
Col nulla non si fa nulla.
Col pane tutti i guai sono dolci.
Come ti rifai il letto, così ti ci addormenti.
Con il tempo e con la paglia si maturano le sorbe.
Con le mani in mano non si va dai dottori.
Con il fuoco si prova l'oro, con l'oro la donna e con la donna l'uomo.
Con il tempo l'acqua buca anche le rocce.
Con le buone maniere si ottiene tutto.
Con tre dita si scrivono libri, ma ci lavorano anche corpo e anima.
Contadini, scarpe grosse e cervelli fini.
Contro la forza la ragion non vale.
Corno passeggero non distrugge amor sincero
Corpo satollo anima consolata.
Corpo sazio non crede a digiuno.
Cortesia schietta, domanda non aspetta.
Cosa fatta capo ha.
Cuor contento gran talento.
Cuor contento il ciel l'aiuta.
Cuor contento non sente stento.


D'amore non si muore.
Da cosa nasce cosa.
Dagli amici mi guardi Iddio che dai nemici mi guardo io.
Dagli un dito e si prenderà un braccio.
Date a Cesare quel che è di Cesare.
Del prossimo anno chi l'entrata intacca, mangia il vitello in corpo della vacca.
Del senno di poi son piene le fosse.
Denari e santità la metà della metà.
Di buone intenzioni è lastricato l'inferno.
Di buoni proponimenti è lastricato l'inferno.
Dice il frumentone: tienmi largo, se vuoi che io ti carichi.
Dicono che è mercante anche chi perde, ma questo presto si ridurrà al verde.
Dieci soldi in più ma rosso.
Dietro al monte c'è la china.
Disgrazie e ombrelli sono più facili da portare quando sono degli altri.
Dio li fa e poi li accoppia.
Dio, se chiude una porta, apre un portone.
Dio manda il freddo secondo i panni.
Dio vede e provvede.
Disse il tarlo alla noce, dammi il tempo che ti foro.
Dimmi con chi vai e ti dirò chi sei.
Domandando si va a Roma.
Domandare è lecito, rispondere è cortesia.
Donna al volante pericolo costante.
Donna al volante lumaca ambulante.
Donna barbuta, coi sassi si saluta.
Donna barbuta, sempre piaciuta. Donna baffuta, sempre piaciuta.
Donna nana, tutta tana.
Donna pelosa, donna virtuosa.
Donna ridarella, o santa o puttanella.
Donne e buoi dei paesi tuoi.
Donne e motori gioie e dolori.
Dov'è abbondanza di legna, vi è carestia di biade.
Dove andò la farina va il sacco.
Dove c'è gusto, non c'è perdenza.
Dove men si pensa rompe Po.
Dove non va acqua ci vuol la zappa.

È facile fare il finocchio con il culo degli altri.
È la donna che fa l'uomo.
È la gaia pioggerella a far crescer l'erba bella.
È meglio avere i pantaloni rotti nel culo che il culo rotto nei pantaloni.
È meglio avere in borsa che vivere di speranza.
È meglio essere capo di lucertola che coda di leone.
È meglio vivere un giorno da leone che cento anni da pecora.
Errare è umano, perseverare è diabolico.
Errare è umano, perdonare è divino.


Fa' quello che il prete dice, non quello che il prete fa.
Facile è criticare, difficile è l'arte.
Fai del bene e dimenticatene; fai del male e ricordatene.
Fare e disfare è tutto un lavorare.
Fatta la legge, trovato l'inganno.
Fatta la sposa, tutti la vogliono.
Fidarsi è bene, non fidarsi è meglio.
Finché va quel tanto che basta lascia stare che se no si guasta.
Fino alla bara sempre s'impara.
Fintanto che la bocca mangia e il culo rende, accidenti alle medicine e a chi le vende.
Fossi e capitagne benedicon le campagne.
Fuori pericolo ognuno è bravo.
Forte non è chi non cade mai, ma chi cadendo riesce a rialzarsi.
Forte non è chi non piange mai, ma chi piangendo riesce a sfogarsi.
Forbici, coltellini e accendini non sono per i bambini.
Fratelli coltelli, parenti serpenti.


Gallina che non razzola, ha razzolato.
Gallina vecchia fa buon brodo.
Gli sciocchi sono i primi a farsi sentire.
Gli uomini si incontrano e le montagne stanno ferme.
Goccia a goccia, s'incava la pietra.
Guarda te poi dirai a me.
Gobba a levante: luna calante, gobba a ponente: luna crescente.



I figli sono pezzi di cuore.
I parenti sono come le scarpe: più stretti sono, più male fanno.
I soldi non fanno la felicità, figuratevi la miseria...
I soldi non fanno la felicità, ma la imitano benissimo...
I vecchi devono, i giovani possono.
Il barbiere ti fa bello, il vino ti fa sangue e la donna ti fa fesso.
Il buon lavoratore rompe la cattiva annata.
Il bravo legale è cattivo vicino.
Il bue disse (cornuto) all'asino.
Il bue mangia il fieno perché si ricorda che è stato erba.
Il cane è il miglior amico dell'uomo.
Il concime fa il foraggio, ed il foraggio fa il concime.
Il contadino che vende letame compra pidocchi.
Il dare è onore, il chiedere è dolore.
Il diavolo fa le pentole ma non i coperchi.
Il domandare è senno, il rispondere è obbligo.
Il fieno fino non è per i somari.
Il freddo il gatto non lo mangia.
Il frutto non cade lontano dall'albero.
Il gioco è bello quando dura poco.
Il grano rado non fa vergogna all'aia.
Il lavoro nobilita l'uomo.
Il lupo non caca agnelli.
Il lupo perde il pelo ma non il vizio.
Il marito geloso muore cornuto.
Il mattino ha l'oro in bocca. Le ore del mattino hanno l'oro in bocca.
Il male peggiore sembra sempre quello che ci tocca.
Il matrimonio è la tomba dell'amore.
Il medico pietoso fa la piaga ulcerosa.
Il meglio è nemico del bene. Il padrone è deficiente il posto va al cliente.
Il pane è la biada dell'uomo.
Il passato non va dimenticato, ma va accantonato.
Il peggior passo è quello dell'uscio.
Il pesce puzza dalla testa.
Il riso abbonda sulla bocca degli stolti. Il riso abbonda sulla bocca degli sciocchi.
Il sapere è di tutti.
Il silenzio è d'oro, la parola d'argento.
Il sole bacia i belli.
Il tempo è danaro.
Il ventre non ha orecchi.
Impara l'arte e mettila da parte.
In bocca chiusa non entrano mosche.
In campagna gode il metro.
In casa non c'è che un servo, e si chiama padrone.
In chiesa coi santi e in taverna con i ghiottoni.
In compagnia un prete prese moglie.
In un mondo di ciechi occhio di lince è quello con un occhio solo.
Innanzi alla virtù Dio ha messo il dolore.
I soldi vanno sempre dove ce n'è.
I miracoli non accadono due volte.


Larga la foglia stretta la via non dir la tua che basta la mia.
La fortuna con il tempo diventa classe.
L'abito non fa il monaco.
L'abito non fa il monaco, ma lo veste.
L'acqua corre al mare.
L'acqua cheta rovina i ponti.
L'acqua di maggio inganna il villano, par che non piova e si bagna il gabbano.
L'acqua fa l'orto.
L'acqua fa marcire i pali.
L'acqua fa marcire la pancia e fa venire i vermi.
L'acqua fa venire le rane nella pancia.
L'acqua lontana non spegne il fuoco.
L'acqua non è fatta per sposarsi.
L'acqua non si rifiuta neanche al peggior nemico. (detto meridionale)
L'amico si riconosce nel momento del bisogno.
L'asino che ha fame mangia ogni strame.
L'amore è cieco.
L'amore e il naso rosso non si possono nascondere.
L'amore non è bello se non è litigarello.
L'anima dell'uomo non è un sacco da riempire, ma un fuoco da accendere.
L'apparenza inganna. L'apparenza inganna e lo specchio mente.
L'appetito non vuol salsa.
L'appetito vien mangiando.
L'arcobaleno la mattina bagna il becco della gallina; l'arcobaleno la sera buon tempo mena.
L'assai basta e il troppo guasta.
L'eccezione conferma la regola.
La paglia vicino al fuoco brucia.
L'Epifania tutte le feste porta via.
L'erba del vicino è sempre la più verde.
L'erba "voglio" non cresce neanche nel giardino del re.
L'ignorante afferma, il saggio dubita, il sapiente riflette.
L'occasione fa l'uomo ladro.
L'occhio del padrone ingrassa il cavallo.
L'ospite è come il pesce: dopo tre giorni puzza. L'ospite e il pesce dopo tre dì rincresce.
L'ozio è il padre di tutti i vizi.
L'uccello in gabbia canta per invidia o per rabbia.
L'unione fa la forza.
L'uomo ordisce e la fortuna tesse.
L'uomo per la parola e il bue per le corna.
L'uomo propone e Dio dispone.
L'uomo propone e la donna dispone.
L'uomo senza denari è un morto che cammina.
L'uovo sodo strozza il gallo
L'uso serve di tetto ai molti abusi.
La bella moglie non l'ottiene l'infingardo.
La calma è la virtù dei forti.
La classe non è acqua.
La coda è la più lunga da scorticare.
La contentezza viene dalle budella.
La corda troppo tesa si spezza.
La coscienza vale mille testimoni e per mille accusatori.
La credenza è un errore si perde il denaro e l'avventore.
La dieta ogni cosa quieta.
La donna è come l'ombra: se l'insegui ti scappa, se scappi t'insegue.
La donna farà la fortuna di un uomo o farà la sua rovina.
La fame caccia il lupo dal bosco.
La fame è cattiva consigliera.
La farina del diavolo va tutta in crusca.
La fortuna aiuta gli audaci.
La fortuna è cieca. La fortuna è cieca; ma la sfiga ci vede benissimo.
La fortuna non vuol fare anticamera.
La finzione poco vale per chi è del mestiere.
La fretta è cattiva consigliera.
La gatta frettolosa fa gattini ciechi.
La giraffa allunga il collo.
La goccia va sempre verso il mare.
La lingua batte dove il dente duole.
La lingua ossa non ha ma spezza le ossa.
La luna di gennaio è la luna del vino.
La luna di gennaio fa luce come giorno chiaro.
La luna mente: quando fa la C diminuisce, quando fa la D cresce.
La luna non cura l'abbaiar dei cani.
La luna regge il lume ai ladri.
La luna, se non riscalda, illumina.
La mala erba non muore mai. La mala erba cresce presto.
La mala nuova la porta il vento.
La mamma dei cretini è sempre incinta. La mamma dei cretini non muore mai. La mamma del peggio è sempre incinta.
La morte non ha paura del medico.
La migliore difesa è l'attacco.
La moglie di Cesare deve essere al di sopra di ogni sospetto.
La necessità aguzza l'ingegno.
La notte porta consiglio.
La pazienza è la virtù dei forti.
La pazienza non è infinita e c'è gente che farebbe perder la pazienza anche ai Santi.
La pianta si conosce dal frutto.
La prima acqua è quella che bagna.
La Quaresima è corta per chi ha da pagare a Pasqua.
La religione non muore.
La ricchezza del contadino sta nelle braccia e chi ne vuole se ne faccia.
La saetta gira gira, torna addosso a chi la tira.
La semplicità era al principio del mondo, la semplicità sarà alla fine del mondo.
La sera leoni, la mattina coglioni.
La speranza è cattivo denaro.
La speranza è il pane dei poveri.
La speranza è il patrimonio dei bisognosi.
La speranza è il sogno dell'uomo desto.
La speranza è la miglior consolazione nella miseria.
La speranza è la miglior musica del dolore.
La speranza è la moneta spicciola della vita.
La speranza è la ricchezza dei poveri.
La speranza è l'ultima a morire.
La speranza è sempre verde.
La speranza è un balsamo per i cuor piagati.
La speranza è un piatto magro.
La speranza è un sogno nella veglia.
La speranza infonde coraggio anche al codardo.
La speranza ingrandisce, l'esperienza rimpicciolisce.
La speranza spesso è preferibile alla realtà.
La speranza troppo a lungo protratta strugge il cuore.
La superbia moltiplica i nostri nemici e mette in fuga i nostri amici.
La superbia mostra l'ignoranza. La superbia è figlia dell'ignoranza.
La superbia va a cavallo e torna a piedi.
La vanga ha la punta d'oro, la zappa d'argento, l'aratro di ferro.
La vecchiaia si presenta con diciannove mancamenti e la goccia al naso che fa venti.
La vera nobiltà sono i costumi.
La verità viene sempre a galla.
La veste copre gran difetti.
La via dell'inferno è lastricata di buone intenzioni.
La vigna dice: "porta, ché riporti".
La virtù sta nel mezzo.
La vita è breve e l'arte è lunga.
La vita è il fine e il dì loda la sera.
Lavoratore buono, d'un podere ne fa due.
Le bugie hanno le gambe corte.
Le cattive nuove volano.
Le chiacchiere non fanno farina.
Le cose lunghe diventano serpi. Le cose lunghe prendono vizio.
Le disgrazie non vengono mai sole.
Le donne degli altri sono sempre più "bone".
Le donne hanno i capelli lunghi e i cervelli corti.
Le donne non si toccano neanche con un fiore.
Le donne ne sanno una più del diavolo.
Le ore del mattino hanno l'oro in bocca.
Le parole sono femmine e i fatti sono maschi.
Le querce non fanno le melarance.
Le rose cascano, le spine restano.
Le rose sono belle, ma con esse ti puoi pungere.
Le teste di legno fan sempre rumore.
Le vacche nella stalla arricchiscono la borsa.
Le vie della provvidenza sono infinite.
Lento a mangiare, lento a lavorare.
Letame di cavallo non fa fallo, quello di bue fa quello che può, quello di pecora fa moltissimo.
Le arance sono oro al mattino; argento a mezzogiorno e piombo la sera.
Lo specchio riflette senza parlare, la donna parla senza riflettere.
Lontano dagli occhi, lontano dal cuore.
Loda il gran campo e il piccolo coltiva.
Loda il monte e tieniti al piano.
Lupo non mangia lupo.


Mai piangere sul latte versato: si aggiunge bagnato al bagnato.
Mai si contrasta, con chi ha che perdere.
Mal si giudica il cavallo dalla sella.
Mal voluto non fu mai troppo.
Male che si vuole non duole.
Mal comune mezzo gaudio.
Mal può rendere ragion del proprio fatto chi lardo, o pesce lascia in guardia al gatto.
Male non fare, paura non avere.
Martello d'oro non rompe le porte del cielo.
Marzo pazzerello, se c'è il sole, porta l'ombrello.
Mazza e panella fanno i figli belli.
Meglio avere il culo gelato che un gelato nel culo.
Meglio comandare che fottere.
Meglio essere invidiati che compatiti. Meglio far invidia che far pietà.
Meglio l'uovo oggi che la gallina domani.
Meglio poco che niente.
Meglio soli che male accompagnati.
Meglio tardi che mai.
Meglio un fringuello in gabbia che un tordo in frasca.
Meglio una brutta sentenza che un bel funerale.
Meglio una festa che cento festicciole.
Meglio una torta in due che una cacca da soli.
Meglio un asino vivo che un dottore morto.
Meglio un morto in casa che un pisano all'uscio di casa.
Moglie e buoi dei paesi tuoi. Donne e buoi dei paesi tuoi.
Meno siamo meglio stiamo.
Moglie maglio.
Molto fumo poco arrosto.
Morir per Cristo, è vivere; vivere senza Cristo è morire.
Morto un papa se ne fa un altro.
Mostra la borsa e ti sarà rubata.



Nacque per nulla chi vive sol per sé.
Natale con i tuoi, Capodanno con chi vuoi.
Natale con i tuoi, Pasqua con chi vuoi.
Ne ammazza più la gola che la spada. Ne uccide più la lingua che la spada.
Né di Venere né di Marte né ci si sposa né si parte, né si da pricipio all'arte.
Né donna, né tela a lume di candela.
Ne sa più un matto in casa sua che un saggio in casa d'altri.
Necessità fa legge.
Neanche il cane muove la coda per niente.
Nel dubbio astieniti.
Nel regno dei ciechi anche un orbo è re. Nella valle dei ciechi ogni orbo è un re.
Nella botte piccola, c'è vino buono.
Nella vita si paga tutto.
Nelle sventure si vede l'amico.
Nessuno è tanto vecchio che non creda di vivere ancora un anno.
Nessuna nuova, buona nuova.
Nessuna donna nasce prostituta.
Nessuno deve vergognarsi di domandare quel che non sa.
Nessuno è profeta in patria.
Non bisogna dipingere il diavolo più brutto di quello che è.
Non cade foglia che Dio non voglia. Non si muove foglia che Dio non voglia.
Non c'è Carnevale senza luna di Febbraio.
Non c'è due senza tre. (...e il quattro vien da sè).
Non c'è fumo senza arrosto.
Non c'è gallina o gallinaccia che a gennaio l'uovo non faccia.
Non c'è intoppo per avere, più che il chiedere e temere.
Non c'è pane senza pena.
Non c'è peggior sordo di chi non vuol sentire.
Non c'è regola senza eccezioni.
Non c'è rosa così bella che da ultimo non avvizzisca.
Non c'è rosa senza spine.
Non comperar mai panno che senta lo vergato.
Non datemi consigli: so sbagliare anche da solo.
Non destare il can che dorme.
Non dir brutta a una donna.
Non domandare all'oste se ha buon vino.
Non dire quattro se non ce l'hai nel sacco.
Non dire tre se non hai quattro.
Non divertirsi riduce l'uomo tonto.
Non è bello ciò che è bello ma è bello ciò che piace.
Non è oca in casa sua.
Non è pazzo il carnevale ma chi gli va dietro.
Non è sempre oro ciò che luccica. Non è tutto oro quel che brilla. Non è tutt'oro quel che luccica.
Non fare alle capate con i muriccioli.
Non fare agli altri ciò che non vorresti fosse fatto a te stesso.
Non fare il male ch'è peccato, non fare il bene ch'è sprecato.
Non fare il passo più lungo della gamba.
Non fare l'asino che l'erba costa.
Non giudicare chi bussa alla tua porta dalla lunghezza della strada che ha percorso per arrivare da te.
Non giudicare se non vuoi esser giudicato.
Non mettere un rasoio in mano a un pazzo.
Non nominare la corda in casa dell'impiccato. Non si parla di corda in casa dell'impiccato.
Non si giudica un libro dalla copertina.
Non ogni lettera va alla posta, non ogni domanda vuole risposta.
Non piangere sul latte versato.
Non pianse mai uno che ridesse l'altro.
Non rimandare a domani quello che puoi fare oggi.
Non si deve aver vergogna, a domandar quel che bisogna.
Non si entra in Paradiso a dispetto dei Santi.
Non si fanno le nozze con i fichi secchi.
Non si fa niente per niente.
Non si può avere la botte piena e la moglie ubriaca.
Non sputare in cielo, che in faccia ti viene.
Non te fidare in omo che aggia rotto il groppone.
Non tutte le ciambelle riescono col buco.
Non tutto il male viene per nuocere.
Non v'è armonia più bella dell'armonia del cuore e della bocca.
Non v'è debole che non si possa aiutare.
Non v'è più superbo d'un povero arricchito.
Non vendere la pelle dell'orso finché non l'hai ucciso.



Occhio che piange, cuore che sente.
Occhio non vede, cuore non duole.
Occhio per occhio, dente per dente.
Oggi a me domani a te.
Ogni bel cantare va a noia.
Ogni bel gioco dura poco.
Ogni cuffia per la notte è buona, e al buio la villana è bella quanto la dama.
Ogni goccia d'Aprile vale mille lire.
Ogni lasciata è persa.
Ogni legno ha il suo tarlo.
Ogni medaglia ha il suo rovescio.
Ogni promessa è debito.
Ogni simile ama il suo simile.
Ogni uccel fà il suo canto.
Ognuno è artefice della propria fortuna.
Ognuno faccia il suo mestiere.
Ognuno fa il bravo a casa sua.
Ognuno ha ciò che merita.
Ognuno sa ballare quando la fortuna suona.
Ognuno ha la sua croce.
Ognuno tira l'acqua al suo mulino quando c'è di mezzo il grano.
Ognuno per sé e Dio per tutti.
Olio di lucerna, ogni mal governa.
Orto, uomo morto.
Ospite raro ospite caro.



Paese che vai usanza che trovi.
Paga il giusto per il peccatore.
Pancia piena non crede al digiuno.
Pancia vuota non sente ragione.
Pane finché dura, ma vino a misura.
Pane al pane e vino al vino.
Parenti serpenti.
Parere e non essere è come filare e non tessere.
Parla come mangi.
Parola e sasso quando sono lanciati non tornano indietro.
Patti chiari amicizia lunga.
Passata la festa, gabbato lo santo.
Patti chiari amici cari.
Peccato confessato è mezzo perdonato.
Pela il fico all'amico e la pèsca al nemico.
Per essere amabili, bisogna amare.
Per essere un buon comandante, bisogna aver fatto una grande guerra.
Per san Benedetto [21 marzo], la rondine è sotto il tetto.
Per San Silvestro [26 dicembre], ogni oliva nel canestro.
Per un punto Martin perse la cappa.
Piemontesi falsi cortesi, romani falsi e villani.
Piove sempre sul bagnato.
Poca brigata vita beata.
Poca gente, bella festa.
Poca farina fa poco pane.
Poi è parente di mai.
Prendere la palla al balzo.
Prima di domandare, pensa alla risposta.
Prima di giudicare una persona ci devi mangiare assieme. (detto meridionale)
Prima Pensa, Poi Parla, Perché Parole Poco Pensate Portano Pena. (Proverbio delle dieci "P").
Primo prossimo è me medesimo.
Profuma di rosa ma rosa non è: dimmi cos'è?
Pruna mangiane una, di cirase quanto ne trase. (Proverbio Siciliano: "Di prugne mangiane solo una, di ciliegie quanto ce ne stanno nella pancia").
Più confusa che persuasa. (detto meridionale)



Qual proposta tal risposta.
Quando arriva la gloria svanisce la memoria.
Quando c'è gusto non c'è perdenza.
Quando hai il minimo dubbio non ci sono dubbi.
Quando il capello è bianco e la barba grigia, sembra di pigiar ma non si pigia.
Quando il cul è avvezzo al peto non si può tenerlo cheto.
Quando il gatto non c'è i topi ballano.
Quando il grano ricasca, il contadino si rizza.
Quando il pesce viene a riva, chi non lo piglia ci scappa via.
Quando la barba fa bianchino, lascia la donna e tienti il vino.
Quando la man non prende, canton di casa rende.
Quando la neve si scioglie si scopre la mondezza.
Quando la pera è matura casca da sola.
Quando l'Uomo non fa il capofamiglia la donna "scasa" (va fuori di testa).
Quando non sai, frequenta il domandare.
Quando non si ha voglia di nulla, si ha bisogno di tutto.
Quando non si sa cosa dire, la cosa miglior da fare è tacere.
Quando piove col sole le vecchie fanno l'amore. Quando piove col sole il diavolo fa l'amore. Quando piove col sole il diavolo si sposa.
Quando piove col sole si pettinano le streghe.
Quando si mangia non si parla.
Quando si parla non si mangia.
Quando tu senti nominar Maria non domandare se vigilia sia.
Quando si è in ballo bisogna ballare.
Quando il povero fa bene al ricco il diavolo scoppia dalle risate.
Quando vedi il porcello corrigli dietro col coltello. (proverbio calabrese: "quando si presenta l'occasione coglila, anzi: approfittane").
Quel che è fatto è reso.
Quel che non vuole quando può, non potrà quando vuole.
Quello che si fa il primo dell'anno si fa tutto l'anno.
Quando il treno passa vicino alla foglia, la foglia vola.
Quattro lumi non s'accendono.



Rana di palude sempre si salva.
Regalare aghi o coltelli porteranno litigi.
Regalare perle o fazzoletti porteranno lacrime.
Rendere pan per focaccia.
Ride bene chi ride l'ultimo.
Ridi ridi che la mamma ha fatto gli gnocchi!
Rimedio a molti mali s'è trovato, tranne all'osso del collo, se è slogato.
Rimediare al male nei suoi principi.
Roba calda il corpo non salda.
Roma non fu fatta in un giorno.
Rossa di capelli, golosa d'uccelli.
Rosso di sera bel tempo si spera; rosso di mattina, brutto tempo si avvicina.
Rosci e cani pezzati ammazzali appena nati.
Rovo in buona terra covo.


Salva la spada non salvare la donna.
Salta chi può.
Sasso che rotola non fa muschio.
Sbagliare è umano, perseverare è diabolico.
Scherza con i fanti e lascia stare i Santi.
Scherzando intorno al lume che t'invita, farfalla perderai l'ali e la vita.
Scherzo di mano, scherzo di villano. Giuoco di mano, giuoco da villano.
Scusa non richiesta, accusa manifesta.
Se ari male, peggio mieterai.
Se dici di amarmi, ho tanta fiducia. Se tanta ne hai sei tutta per me. Quindi ci sposiamo. ("16 di amarmi, 80 fiducia. 70 ne hai 6 tutta per me. 15 sposiamo").
Se gioventù sapesse, se vecchiaia potesse.
Se il coltivatore non è più forte della sua terra, questa finisce per divorarne.
Se la mano non prende, la casa rende.
Se le lattughe lasci in guardia alle oche, al ritornar ne troverai ben poche.
Se mangi, bevi e il culo rende, a quel paese le medicine e chi le vende.
Se non è zuppa è pan bagnato.
Senza denari non canta un cieco. Senza denari non si canta messa.
Sia lodato Gesù Cristo, chi è povero e malvisto. Sia lodato Gesù Cristo. Sempre sia lodato e il diavolo sia impiccato.
Se vuoi riconoscenza, non fare favori.
Si dice il peccato, ma non il peccatore.
Si parla del diavolo e spuntano le corna. Si parla del lupo e ne spunta la coda.
Si stava meglio quando si stava peggio.
Soffia due o tre volte quando è caldo il boccone.
Solo Dio è senza difetto.
Sono sempre gli stracci che vanno all'aria.
Sotto il grande sasso, dorme il grande pesce.
Sotto la luna marzolina nasce l'insalatina.
Sotto la neve pane, sotto l'acqua fame.
Spesso a chiaro mattino v'è torbida sera.
Sposa bagnata, sposa fortunata.
Studia, non per sapere di più, ma per sapere meglio degli altri.



Tale padre, tale figlio.
Tanti galli a cantar non fa mai giorno.
Tanti pochi fanno un tanto.
Tanto fumo poco arrosto.
Tanto va la gatta al lardo, che ci lascia lo zampino.
Tempo, marito e figli, vengono come li pigli.
Tentar non nuoce.
Terra assai, terra poca.
Terra bianca tosto stanca.
Terra coltivata, raccolta sperata.
Terra negra buon grano mena.
Tira più un pelo di donna che un carro di buoi. Tira più un pelo di figa che un carro di buoi.
Tra cani non si mordono.
Tra i due litiganti il terzo gode.
Tra i due litiganti Satana gode
Tra il dire e il fare c'è di mezzo il mare.
Tra moglie e marito non mettere il dito.
Tre S attraggono le persone: Sesso, Sangue e Soldi
Tre cose vuole il campo: buon lavoratore, buon seme, buon tempo.
Tromba di culo, sanità di corpo.
Troppa familiarità genera disprezzo.
Troppi cuochi guastano la cucina.
Troppi galli nel pollaio dopo un po' si beccano.
Troppo caro è quel miele che si lecca delle spine.
Trovare pane per i propri denti.
Tutte le strade portano a Roma.
Tutte le volpi finiscono in pellicceria.
Tutti i fiumi vanno al mare.
Tutti i guai son guai, ma il guaio senza pane è il più grosso.
Tutti i gusti son gusti.
Tutti i mestieri danno il pane.
Tutti i nodi vengono al pettine.
Tutti i salmi finiscono in gloria.
Tutto è bene quel che finisce bene.
Tutto il mondo è paese.


Uccelin che mette coda vuol mangiare in ogni ora.
Ucci, ucci, sento odor di cristianucci.
Un bel tacer non fu mai scritto.
Un padre campa cento figli e cento figli non campano un padre.
Un bacio tira l'altro e si finisce in sala parto.
Un uomo sulla luna non sarà mai interessante quanto una donna sotto il sole.
Una causa cattiva peggiora col volerla difendere.
Una ciliegia tira l'altra. Una parola tira l'altra.
Una mano lava l'altra e tutte e due lavano il viso. Una mano lava l'altra e due lavano il secchio.
Una mela al giorno toglie il medico di torno.
Una ne paga cento. Una ne paga tutte.
Una piccola scintilla desta grande fuoco.
Una rondine non fa primavera.
Una testa savia ha la bocca chiusa.
Una volta corre il cane e una volta la lepre.
Una volta per uno non fa male a nessuno.
Uno semina l'altro raccoglie.
Un uccello ammaliziato non dà retta alla civetta.
Uomo a cavallo, sepoltura aperta.
Uomo avvisato, mezzo salvato.
Uomo morto non fa più guerra.
Uva o melone, ma ognuno alla sua stagione.

Vacche e buoi dei paesi tuoi.
Vacche e buoi di strigliare spesso bada, perché la striglia è una seconda biada.
Vai a letto presto, svegliati di buon mattino e desterai l'invidia del vicino.
Val più un cattivo accordo che una buona sentenza.
Vale più la pratica che la grammatica.
Vale più un briciolo di fortuna che un pozzo di sapienza.
Vale più un fatto di mille parole.
Vale più un gusto che un casale.
Vale più un testimone di vista che l'udito.
Vanga e zappa non vuol digiuno.
Vanga piatta poco adatta.
Vedere e non toccare è una cosa da imparare. Guardare e non toccare è una cosa da imparare.
Vento fresco, mare crespo.
Vicino alla chiesa, lontano da Dio.
Vita quieta, sobria dieta, mente lieta.
Vivi e lascia vivere.
Vizio di natura, fino alla fossa dura. Vizio di natura, fino alla morte dura.`;

let splitta = stringa.split(".");
let lista = splitta.map((el) => el.trim());

export default function Home() {
  const [proverbio, setProverbio] = useState("");
  const [inizio, setInizio] = useState("");

  function generaProverbio() {
    let min = 0;
    let max = lista.length;
    let trovato = false;
    for (let i = 0; i < lista.length; i++) {
      const el = lista[i];
      if (el.indexOf(inizio) == 0) console.log(el);
      if (el.indexOf(inizio) == 0 && !trovato) {
        min = i;
        trovato = true;
      }
      if (el.indexOf(inizio) != 0 && trovato) {
        max = i;
        break;
      }
    }

    console.log("Min ", min);
    console.log("Max ", max);
    const number = Math.floor(Math.random() * (max - min) + min);
    const nuovoProverbio = lista[number];
    setProverbio(nuovoProverbio);
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-200 font-sans text-stone-700">
      <input
        type="text"
        placeholder="Inizia con ..."
        value={inizio}
        onChange={(e) => setInizio(e.target.value)}
        className="md:text-3xl text-xl border rounded-lg text-stone-900 absolute md:top-20 top-10 md:p-4 p-2 shadow-md "
      />
      <h2 className="md:text-7xl text-3xl font-bold absolute md:top-60 top-30 text-stone-800 md:p-40 p-5">
        {proverbio}
      </h2>
      <button
        onClick={generaProverbio}
        className="bg-sky-700 font-extrabold md:p-8 p-4 md:text-5xl text-2xl rounded-3xl text-sky-50 absolute md:bottom-30 bottom-10 shadow-xl shadow-sky-300"
      >
        Genera proverbio
      </button>
    </div>
  );
}
