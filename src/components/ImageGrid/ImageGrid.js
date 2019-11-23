import React, { Component } from 'react';
import {connect} from 'react-redux'
import './styles.css';
import Button from '../Button'
import {loadImages} from '../../actions'

// const key = '7be6b9efb134a92e7d923f6c9f43d783bfd52e40c4994dc552561386e9733c56';

class ImageGrid extends Component {

    componentDidMount() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });
        // load the images once at first
        this.props.loadImages()
    }

    render() {
        const { images , error, isLoading, loadImages} = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {/* <a onClick={this.props.loadImages}>Load Images</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
            </div>
        );
    }
}
const mapStateToProps = ({isLoading, images, error}) => ({
    isLoading,
    images,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps,)(ImageGrid);
