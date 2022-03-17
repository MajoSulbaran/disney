import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

function App() {	
	return (

   <PageWrapper>
	       <Pelicula titulo= "oblivion (2012)" calificacion= "8.1" dierector="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min"  img="images/uploads/mv1.jpg">
		As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat....
		</Pelicula>
       
		<Pelicula titulo= "into the into the wild (2014)" calificacion= "7.8" dierector="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min"  img="images/uploads/mv2.jpg">
		Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
		</Pelicula>
       


   </PageWrapper>
	);
}
 
	export default App;
