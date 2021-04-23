import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    withIonLifeCycle,
} from '@ionic/react';
import RecipeContainer from '../components/RecipeContainer';
import './Page.css';
import React from 'react';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipeData: null,
            loading:false,
        }
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter event fired')
       // this.fetchRecipe()
    }


    ionViewDidEnter() {
        console.log('ionViewDidEnter event fired')
        this.fetchRecipe()
    }


    fetchRecipe() {
        this.setState({loading: false});

       // const url = `https://127.0.0.1:8000/api/products/1`;
        const url = 'https://bakery-manager-demo.herokuapp.com/api/products/1';
        fetch(url, {method: 'get'})
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                console.log(json);
                this.setState({recipeData : json, loading: true});
            })
            .catch(function (error){
                console.log(error.message)
            });

    }


    render() {
      const { name } = "useParams()";
      if(this.state.loading){

      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>Recette : {this.state.recipeData.name}</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Recette : {this.state.recipeData.name}</IonTitle>
              </IonToolbar>
            </IonHeader>
              <RecipeContainer recipeData={this.state.recipeData} />
          </IonContent>
        </IonPage>
      );

      }else{
          return (
              <IonPage>
                    En chargement test ..
              </IonPage>
          );
    }
  }
}





export default withIonLifeCycle(Page);
