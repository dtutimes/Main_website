import React, { Component } from 'react';
import api from "api";
import {Container} from 'reactstrap';
import BlogCard from "sections/BlogSections/BlogCard";


export default class BlogCategorySection extends Component {
    constructor(params) {
        super(params);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        api.get('/category/' + this.props.category.id).then(res => this.setState({posts: res.data}));
    }
    
    render() {
        const {posts} = this.state;
        return (
            <div>
                <Container>
                    {posts && posts.item && <BlogCard posts={posts.item} /> }
                </Container>
            </div>
        )
    }
}
