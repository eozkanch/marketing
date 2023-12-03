import React from 'react';
import './style.scss';
import { Col, Container, Row } from 'react-bootstrap';

const ConfidentialityAgreementPage = () => {
  return (
    <Container className="confidentiality">
      <Row className="row">
        <Col className="col">
          <div className="content-main-title">
            <h2>Politique de confidentialité</h2>
          </div>
          <div className="rule-wrap">
            <ul>
              <p>
                <strong>Protection des données</strong>
              </p>
              <p>
                Nous utilisons les données que vous nous avez soumises pour traiter votre commande. Vos données seront
                transmises à la compagnie responsable de la livraison dans la mesure nécessaire à la livraison des marchandises.
                Pour le traitement des opérations de paiement, nous transmettons vos données de paiement à l'établissement
                financier ou de crédit responsable de votre paiement. Nous ne transférons pas vos données à des tiers à des
                fins publicitaires. Après le traitement complet de la commande et son paiement, ces données sont bloquées
                jusqu'à leur utilisation ultérieure et supprimées après l'expiration des délais de conservation des données à
                des fins commerciales et fiscales. Nous protégeons notre site Web contre la perte, la destruction, l'accès,
                la modification et la diffusion de vos données. Malgré des contrôles fréquents, il se peut que nous ne
                puissions pas nous protéger de tous les dangers. Conformément à la loi fédérale sur la protection des données
                (LPD), vous avez la possibilité de recevoir en permanence des informations gratuites sur les données stockées
                sur vous et avez le droit de corriger, bloquer ou supprimer ces données. Toutes les questions peuvent être
                envoyées par voie électronique. Si vous avez des questions concernant vos données, veuillez contacter notre
                service client.
              </p>
              <p>
                <strong>Publicité par e-mail (Bulletin-Newsletter)</strong>
              </p>
              <p>
                Si vous vous inscrivez à notre newsletter, nous utiliserons notre newsletter pour vous envoyer régulièrement
                des e-mails. Il est toujours possible de se désinscrire de la newsletter et peut se faire en utilisant le lien
                prévu à cet effet dans la newsletter. En outre, vous pouvez enregistrer votre abonnement à la newsletter sur
                Facebook, etc. Nous pouvons l'utiliser à des fins de remarketing sur les réseaux sociaux.
              </p>
              <p>
                <strong>
                  <em>Cookies</em>
                </strong>
              </p>
              <p>
                <em>
                  Nous utilisons des cookies sur certaines de nos pages Web pour faciliter la navigation sur notre site et
                  activer certaines fonctions. Ce sont de petits fichiers texte stockés sur votre ordinateur. La plupart de
                  nos cookies sont automatiquement supprimés lorsque vous quittez votre navigateur Web. D'autres sont stockés
                  sur votre ordinateur pour rendre votre prochaine visite sur notre site plus rapide et plus efficace. Nos
                  entreprises partenaires ne peuvent pas utiliser ces cookies pour traiter ou connaître vos données
                  personnelles. Si vous ne souhaitez pas stocker de cookies sur votre ordinateur ou si vous souhaitez être
                  informé de leur stockage, vous pouvez empêcher l'installation de cookies en modifiant les paramètres de
                  votre navigateur.
                </em>
              </p>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfidentialityAgreementPage;
