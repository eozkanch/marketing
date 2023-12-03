import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss';

const UseAgreementPage = () => {
  return (
    <div >
      <Container className='use-agreement'>
        <Row>
          <Col>
            <div className="content-main-title">
              <h2>Accord d'utilisation</h2>
            </div>
            <div className="rule-wrap">
              <ul>
                <li>
                  <strong>1.Champ d'application</strong>
                  <p>
                    Cette boutique en ligne est exploitée par la société Les NOTRES. Dans tout le site, les termes «nous», «nous» et «nos» font référence à Les NOTRES. En
                    visitant le site Web ou en utilisant les outils, informations et services, l'utilisateur / client / visiteur
                    accepte et est soumis aux versions de tous les termes et conditions, politiques et avis spécifiés ici et dans
                    d'autres documents en vigueur au moment de la commande.
                  </p>
                </li>

                <li>
                  <strong>2.Dispositions générales</strong>
                  <p>
                    L'affichage des produits dans la boutique en ligne n'est pas juridiquement contraignant pour nous et ne crée
                    qu'un catalogue en ligne sans engagement. Le simple fait d'ajouter des produits au "panier" ne crée pas de
                    commande. Une commande d'articles dans le panier devient obligatoire uniquement lorsque vous cliquez sur le
                    bouton «Commander» sur la page de commande. La réception correcte de votre commande est immédiatement confirmée
                    par un e-mail automatisé et crée un accord contractuel. L'approbation est exprimée en fonction de
                    l'acceptabilité légale et de la disponibilité des marchandises commandées. Si nous ne sommes pas en mesure de
                    traiter votre commande, vous recevrez une notification de son indisponibilité. Les annonces sur l'état des
                    stocks en magasin sont utilisées à titre d'information mais ne sont pas utilisées comme confirmation de
                    livraison et peuvent être incorrectes.
                  </p>
                </li>

                <li>
                  <strong>3.La livraison et les frais de livraison</strong>
                  <p>
                    Nous livrons les produits que vous avez commandés dans la plage de livraison que vous choisissez et à
                    l'adresse que vous avez indiquée lors de la commande. Si vous n'êtes pas chez vous, nous vous proposons le
                    service de laisser votre livraison à la porte de votre domicile, selon les instructions que vous laissez à la
                    fin de votre commande en ligne. Nos produits surgelés sont conditionnés dans des conditions appropriées après
                    la livraison. Nous garantissons la chaîne du froid jusqu'au moment de la livraison, et nous ne sommes pas
                    responsables après la livraison.
                  </p>

                  <p>
                    <strong>3.1. Genève-Lausanne</strong>
                  </p>
                  <p>
                    Les livraisons se feront gratuitement pour le canton de Genève et pour la ville de Lausanne ainsi que dans
                    les villes suisse entre les deux à partir des achats de 50fr. Les codes postaux qui ont le service de
                    livraison gratuite sont affiche sous la page de la livraison.
                  </p>

                  <p>
                    <strong>3.2 Pour les autres villes et cantons de Suisse,</strong>
                  </p>
                  <p>
                    <strong>150 francs</strong> Les frais de port sont à la charge de Bizimkiler pour vos commandes avec ou au
                    dessus.
                  </p>
                  <p>Pour toutes les autres commandes, les frais de livraison sont à la charge du client aux tarifs de La Poste
                    Suisse SA.
                  </p>
                </li>

                <li>
                  <strong>4.Paiement</strong>
                  <p>
                    Les produits peuvent être payés par carte de crédit, PayPal ou facture, ou au moment de la livraison à
                    Genève et Lausanne. Le montant de la commande sera déduit immédiatement après confirmation. Les
                    informations de paiement confidentielles sont cryptées et nous n'y avons pas accès. Nos clients reçoivent la
                    facture par e-mail et également dans les colis de commande. Vous pouvez toujours consulter votre facture en
                    vous connectant à votre compte client. Dans la possibilité de payer par factures, <strong>Doit être payé dans
                      les 15 jours</strong>.
                  </p>

                  <p>
                    Les coupons ne sont valables que dans les conditions qui y sont décrites. La création d'autres coupons sans
                    autorisation écrite préalable est interdite. Si le coupon n'est pas utilisé dans son intégralité, le reste
                    sera envoyé sur le compte pour une future commande. Il n'est pas possible d'accumuler des actions, des
                    coupons et des remises.
                  </p>
                </li>

                <li>
                  <strong>5.Protection de la propriété et résiliation du contrat et avenants</strong>
                  <p>
                    Jusqu'à ce que le paiement complet soit effectué, la propriété de la propriété nous appartient. Si vous ne
                    respectez pas le contrat, par exemple si vous ne répondez pas à un rappel de paiement, nous pouvons
                    résilier le contrat après une période de temps spécifiée et demander le retour des marchandises qui sont
                    encore en votre possession. Nous nous réservons le droit de ne pas contracter après des résultats négatifs
                    d'un test de crédit. Les coupons achetés ne peuvent être ni retournés ni remboursés.
                  </p>
                </li>

                <li>
                  <strong>6.Garantie et responsabilité</strong>
                  <p>
                    Si les marchandises livrées sont incomplètes ou endommagées, par exemple si un produit est défectueux ou une
                    erreur de livraison, nous pouvons résoudre ce problème en contactant le client avec une autre livraison si
                    possible, ou nous pouvons effectuer un remboursement si le client le souhaite.
                  </p>
                </li>

                <li>
                  <strong>7.Protection des données</strong>
                  <p>
                    Nous utilisons les données que vous nous avez soumises pour traiter votre commande. Vos données seront
                    transmises à la compagnie maritime responsable de la livraison dans la mesure nécessaire à la livraison des
                    marchandises. Pour le traitement des opérations de paiement, nous transmettons vos données de paiement à
                    l'établissement financier ou de crédit responsable de votre paiement. Nous ne transférons pas vos données à
                    des tiers à des fins publicitaires. Après le traitement complet de la commande et son paiement, ces données
                    sont bloquées jusqu'à leur utilisation ultérieure et supprimées après l'expiration des délais de conservation
                    des données à des fins commerciales et fiscales. Nous protégeons notre site Web contre la perte, la
                    destruction, l'accès, la modification et la diffusion de vos données. Malgré des contrôles fréquents, il se
                    peut que nous ne puissions pas nous protéger de tous les dangers. Conformément à la loi fédérale sur la
                    protection des données (LPD), vous avez la possibilité de recevoir en permanence des informations gratuites
                    sur les données stockées sur vous et avez le droit de corriger, bloquer ou supprimer ces données. Toutes les
                    questions peuvent être envoyées par voie électronique. Si vous avez des questions concernant vos données,
                    veuillez contacter notre service client.
                  </p>

                  <p>
                    <em>Publicité par e-mail (Bulletin-Newsletter)</em>
                  </p>
                  <p>
                    Si vous vous inscrivez à notre newsletter, nous utiliserons notre newsletter pour vous envoyer régulièrement
                    des e-mails. Il est toujours possible de se désinscrire de la newsletter et peut se faire en utilisant le
                    lien prévu à cet effet dans la newsletter. En outre, vous pouvez enregistrer votre abonnement à la
                    newsletter sur Facebook, etc. Nous pouvons l'utiliser à des fins de remarketing sur les réseaux sociaux.
                  </p>

                  <p>
                    <em>Cookies</em>
                  </p>
                  <p>
                    Nous utilisons des cookies sur certaines de nos pages Web pour faciliter la navigation sur notre site et
                    activer certaines fonctions. Ce sont de petits fichiers texte stockés sur votre ordinateur. La plupart de nos
                    cookies sont automatiquement supprimés lorsque vous quittez votre navigateur Web. D'autres sont stockés sur
                    votre ordinateur pour rendre votre prochaine visite sur notre site plus rapide et plus efficace. Nos
                    entreprises partenaires ne peuvent pas utiliser ces cookies pour traiter ou connaître vos données
                    personnelles. Si vous ne souhaitez pas stocker de cookies sur votre ordinateur ou si vous souhaitez être
                    informé de leur stockage, vous pouvez empêcher l'installation de cookies en modifiant les paramètres de
                    votre navigateur.
                  </p>

                  <p>
                    <strong>8.Vérification de crédit et pointage de crédit</strong>
                  </p>
                  <p>
                    La nôtre se réserve le droit de demander des informations sur l'identité et la solvabilité à des sociétés de
                    services spécialisées (agences d'information économique) afin de s'assurer du paiement par factures. À cette
                    fin, nous transmettons vos données personnelles nécessaires au contrôle de crédit à l'entreprise responsable.
                    Le questionnaire de solvabilité peut inclure des valeurs de probabilité (valeurs en points) qui sont
                    calculées sur la base de procédures mathématiques et statistiques scientifiquement acceptées et qui
                    contiennent notamment des données d'adresse.
                  </p>

                  <p>
                    <strong>9.Commentaires des clients</strong>
                  </p>
                  <p>
                    Les commentaires écrits sur nos produits sur notre site Web nous donnent le droit exclusif et illimité de les
                    utiliser. Nous nous réservons le droit de consulter un avis uniquement pendant une courte période, brièvement
                    ou pas du tout. Un avis client ne donne que l'avis d'un client et ne correspond pas forcément à nos concepts.
                  </p>

                  <p>
                    <strong>10.Tribunal autorisé</strong>
                  </p>
                  <p>
                    Notre activité est soumise au droit suisse uniquement. L'inefficacité de certaines dispositions particulières
                    des clauses du contrat n'entraîne pas l'inefficacité de l'ensemble du contrat.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UseAgreementPage;
