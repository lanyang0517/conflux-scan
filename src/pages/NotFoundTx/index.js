import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import querystring from 'querystring';
import media from '../../globalStyles/media';
import CopyButton from '../../components/CopyButton';

const nfImg = require('../../assets/images/box3.gif');

const NfWrapDiv = styled.div`
  margin-top: 150px;
  ${media.pad`margin-top: 120px`}
  ${media.tablet`margin-top: 100px`}
  ${media.mobile`margin-top: 0`}
  overflow: hidden;
  .img {
    float: left;
    margin-left: 80px;
    margin-right: 72px;
    margin-bottom: 100px;
    width: 272px;
    ${media.pad`
      margin-left: 20px;
      margin-right: 30px;
    `}
    ${media.tablet`
      width: 150px;
      margin-left: 20px;
      margin-right: 30px;
    `}
    ${media.mobile`
      display: none;
    `}
  }
  .right {

  }
  .title {
    font-size: 54px;
    ${media.pad`font-size: 40px`}
    ${media.tablet`font-size: 32px`}
    ${media.mobile`font-size: 24px; margin-top: 20px`}
  }
  .row2 {
    font-size: 20px;
    margin-top: 20px;
  }
  .row3 {
    font-size: 20px;
    a {
      text-decoration: underline;
      cursor: pointer;
      color:rgba(0,0,0,0.87);
    }
  }
  .packing {
    margin-left: 4px;
  }
`;
class NotFoundTx extends PureComponent {
  render() {
    let { searchId, location } = this.props;
    if (!searchId) {
      const parsed = querystring.parse(location.search.replace(/^\?/, ''));
      if (parsed.searchId) {
        searchId = parsed.searchId;
      }
    }

    return (
      <NfWrapDiv>
        <img src={nfImg} className="img" />
        <div className="right">
          <div className="title">
            <FormattedMessage id="app.pages.NotFoundTx.title1" />
            <FormattedMessage id="app.pages.NotFoundTx.title2">{(txt) => <strong>{txt}</strong>}</FormattedMessage>
          </div>

          <div className="row2">
            <span>0x8a0df7cca3b431…</span>
            <CopyButton style={{ marginLeft: '5px' }} txtToCopy={searchId} btnType="two" toolTipId="app.pages.NotFoundTx.tooltip" />
            <FormattedMessage className="packing" id="app.pages.NotFoundTx.packing" />
          </div>

          <div className="row3">
            <FormattedMessage id="app.pages.NotFoundTx.ask" />
            <FormattedMessage id="app.pages.NotFoundTx.concatus">
              {(txt) => <a href="mailto:hr@conflux-chain.org">{txt}</a>}
            </FormattedMessage>
          </div>
        </div>
      </NfWrapDiv>
    );
  }
}

NotFoundTx.propTypes = {
  searchId: PropTypes.string,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

NotFoundTx.defaultProps = {
  searchId: '',
  location: {
    search: '',
  },
};

export default injectIntl(NotFoundTx);
