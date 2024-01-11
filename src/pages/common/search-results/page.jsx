import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import data from '../../../data/allproduct.json';
import "./style.scss"
import PopulerItem from '../../../components/common/product-card/populer-item/populeritem';
const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const allCategories = data.allcategories;

        // Find the category with the specified categories property ("/tum-urunler")
        const tumUrunlerCategory = allCategories.find(category => category.categories === "/tum-urunler");

        // If the category is found, use its data property; otherwise, use an empty array
        const results = tumUrunlerCategory ? tumUrunlerCategory.data : [];

        // Filter the results based on the search query
        const filteredResults = results.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );

        // Map the filteredResults to match the expected properties
        const mappedResults = filteredResults.map(product => ({
          vendor_title: product.vendor_title,
          name: product.name,
          price: product.price,
          details_link: product.details_link,
          image_url: product.image_url,
        }));

        // Set the search results and update the loading state
        setSearchResults(mappedResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    // Invoke the getProducts function
    getProducts();
  }, [query]); // Trigger useEffect when the query changes

  return (
    <Container>
      <h3>{searchResults.length} résultats ont été trouvés selon le mot-clé "{query}"</h3>

      {loading ? (
        <p>Loading...</p>
      ) : searchResults.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
      ) : (
        <Row className="gy-4">
          {searchResults.map((result) => (
            <Col sm={12} md={3} lg={2} key={result.details_link} className="serch-result-col">

            <PopulerItem
            key={result.categories}
            product={result}
          />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResultsPage;

