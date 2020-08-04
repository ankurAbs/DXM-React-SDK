import React from 'react';
import { CmsComponent, CmsField, CmsFieldTypes } from 'crownpeak-dxm-react-sdk';
import ReactHtmlParser from 'react-html-parser';
import { isEqual } from 'lodash-es';

export default class FeaturedPost extends CmsComponent{
    constructor(props) {
        super(props);
        this.state = {
            post_title: {},
            post_leader: {},
        }
        const post_title = new CmsField("Post_Title", CmsFieldTypes.TEXT),
            post_leader = new CmsField("Post_Leader", CmsFieldTypes.WYSIWYG);

        this.setState({ post_leader, post_title });
    }

    async componentDidMount() {
        // this.post_title = new CmsField("Post_Title", CmsFieldTypes.TEXT),
        // this.post_leader = new CmsField("Post_Leader", CmsFieldTypes.WYSIWYG);

        // this.setState({ post_leader, post_title });

    }
    // componentDidUpdate = (prevProps, prevState) => {
    //     const post_title = new CmsField("Post_Title", CmsFieldTypes.TEXT),
    //         post_leader = new CmsField("Post_Leader", CmsFieldTypes.WYSIWYG),
    //         isPostTitleChanged = !isEqual(post_title, prevState.post_title),
    //         isLeaderChanged = !isEqual(post_leader, prevState.post_leader);

    //     if(isPostTitleChanged) {
    //         console.log('****isPostTitleChanged=', post_title);
    //     }
    // }

    render() {
        const { post_title, post_leader } = this.state;
        return (
            <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">{ this.post_title }</h1>
                <h1 className="display-4 font-italic">{ this.post_leader }</h1>
                <p className="lead my-3">{ ReactHtmlParser(this.post_leader) }</p>
                <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue
                    reading...</a></p>
            </div>
        )
    }
}
