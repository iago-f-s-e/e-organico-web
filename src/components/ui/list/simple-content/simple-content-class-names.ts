import { Nil } from '@src/@types/globals';

type GetClassName = {
  container: {
    main: string;
  };
  article: {
    main: string;
  };
  info: {
    container: string;
    content: string;
    header: string;
  };
  action: {
    container: string;
    content: string;
  };
};

export const simpleContentClassNames = {
  container: {
    main: {
      IS_EXPANDED: 'is-expanded-simple-content-container',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-container',
    },
  },
  article: {
    main: {
      IS_EXPANDED: 'is-expanded-simple-content-article',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-article',
    },
  },
  info: {
    header: {
      IS_EXPANDED: 'is-expanded-simple-content-info-header',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-info-header',
    },
    container: {
      IS_EXPANDED: 'is-expanded-simple-content-info-container',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-info-container',
    },
    content: {
      IS_EXPANDED: 'is-expanded-simple-content-info-content',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-info-content',
    },
  },
  action: {
    container: {
      IS_EXPANDED: 'is-expanded-simple-content-action-container',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-action-container',
    },
    content: {
      IS_EXPANDED: 'is-expanded-simple-content-action-content',
      IS_NOT_EXPANDED: 'is-not-expanded-simple-content-action-content',
    },
  },
};

export const getSimpleContentClassNames = (isExpanded: boolean | Nil): GetClassName => {
  const container = {
    main: isExpanded
      ? simpleContentClassNames.container.main.IS_EXPANDED
      : simpleContentClassNames.container.main.IS_NOT_EXPANDED,
  };

  const article = {
    main: isExpanded
      ? simpleContentClassNames.article.main.IS_EXPANDED
      : simpleContentClassNames.article.main.IS_NOT_EXPANDED,
  };

  const info = {
    container: isExpanded
      ? simpleContentClassNames.info.container.IS_EXPANDED
      : simpleContentClassNames.info.container.IS_NOT_EXPANDED,
    content: isExpanded
      ? simpleContentClassNames.info.content.IS_EXPANDED
      : simpleContentClassNames.info.content.IS_NOT_EXPANDED,

    header: isExpanded
      ? simpleContentClassNames.info.header.IS_EXPANDED
      : simpleContentClassNames.info.header.IS_NOT_EXPANDED,
  };

  const action = {
    container: isExpanded
      ? simpleContentClassNames.action.container.IS_EXPANDED
      : simpleContentClassNames.action.container.IS_NOT_EXPANDED,
    content: isExpanded
      ? simpleContentClassNames.action.content.IS_EXPANDED
      : simpleContentClassNames.action.content.IS_NOT_EXPANDED,
  };

  return { action, info, article, container };
};
