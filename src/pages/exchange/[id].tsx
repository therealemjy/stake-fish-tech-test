import * as React from 'react';
import { PageProps, GetServerData, GetServerDataProps } from 'gatsby';

import apiService, { Exchange } from '../../services/api';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import * as Styles from '../../pageSpecifics/exchange/styles';

interface ServerData {
  data?: Exchange;
  error?: string;
}

export interface ExchangePageProps
  extends PageProps<unknown, unknown, unknown, ServerData> {}

const ExchangePage: React.FC<ExchangePageProps> = ({ serverData }) => (
  <>
    <Head />
    <Header />

    <main>
      <Wrapper>
        {!!serverData.error ? (
          <p>{serverData.error}</p>
        ) : (
          <>
            <Styles.BackLink to="/" label="Go back" />

            <Styles.Headline>
              <Styles.HeadlineImage
                src={serverData.data?.logoUri}
                alt={`Logo of ${serverData.data?.name || 'exchange'}`}
              />

              <Styles.HeadlineExchange>
                <Styles.HeadlineExchangeName>
                  {serverData.data?.name}
                </Styles.HeadlineExchangeName>

                <Styles.HeadlineExchangeRank>
                  #{serverData.data?.rank}
                </Styles.HeadlineExchangeRank>
              </Styles.HeadlineExchange>
            </Styles.Headline>

            <Styles.Content>
              {!!serverData.data?.description && (
                <Styles.Description>
                  {serverData.data.description}
                </Styles.Description>
              )}

              {(!!serverData.data?.facebookUrl ||
                !!serverData.data?.twitterHandle ||
                !!serverData.data?.slackUrl ||
                !!serverData.data?.redditUrl ||
                !!serverData.data?.telegramUrl ||
                !!serverData.data?.country ||
                serverData.data?.yearEstablished) && (
                <Styles.InfoContainer>
                  {(!!serverData.data?.country ||
                    serverData.data?.yearEstablished) && (
                    <Styles.DetailsContainer>
                      {!!serverData.data?.country && (
                        <Styles.Detail>
                          <Styles.DetailLabel>Country</Styles.DetailLabel>
                          <Styles.DetailText>
                            {serverData.data?.country}
                          </Styles.DetailText>
                        </Styles.Detail>
                      )}

                      {!!serverData.data?.yearEstablished && (
                        <Styles.Detail>
                          <Styles.DetailLabel>
                            Establishment year
                          </Styles.DetailLabel>
                          <Styles.DetailText>
                            {serverData.data?.yearEstablished}
                          </Styles.DetailText>
                        </Styles.Detail>
                      )}
                    </Styles.DetailsContainer>
                  )}

                  {(!!serverData.data?.facebookUrl ||
                    !!serverData.data?.twitterHandle ||
                    !!serverData.data?.slackUrl ||
                    !!serverData.data?.redditUrl ||
                    !!serverData.data?.telegramUrl) && (
                    <Styles.SocialLinks>
                      {!!serverData.data?.facebookUrl && (
                        <Styles.SocialLink
                          iconName="social-facebook"
                          to={serverData.data.facebookUrl}
                          aria-label={`Link to the Facebook page of ${serverData.data.name}`}
                        />
                      )}

                      {!!serverData.data?.twitterHandle && (
                        <Styles.SocialLink
                          iconName="social-twitter"
                          to={`https://twitter.com/${serverData.data.twitterHandle}`}
                          aria-label={`Link to the Twitter account of ${serverData.data.name}`}
                        />
                      )}

                      {!!serverData.data?.slackUrl && (
                        <Styles.SocialLink
                          iconName="social-slack"
                          to={serverData.data.slackUrl}
                          aria-label={`Link to the Slack account of ${serverData.data.name}`}
                        />
                      )}

                      {!!serverData.data?.redditUrl && (
                        <Styles.SocialLink
                          iconName="social-reddit"
                          to={serverData.data.redditUrl}
                          aria-label={`Link to the Reddit page of ${serverData.data.name}`}
                        />
                      )}

                      {!!serverData.data?.telegramUrl && (
                        <Styles.SocialLink
                          iconName="social-telegram"
                          to={serverData.data.telegramUrl}
                          aria-label={`Link to the Telegram account of ${serverData.data.name}`}
                        />
                      )}
                    </Styles.SocialLinks>
                  )}
                </Styles.InfoContainer>
              )}
            </Styles.Content>
          </>
        )}
      </Wrapper>
    </main>

    <Footer />
  </>
);

export default ExchangePage;

export const getServerData: GetServerData<ServerData> = async (context) => {
  const serverData = await apiService.getExchange({
    // Ideally we would specify the type of the route params inside the context,
    // but Gatsby's typing doesn't permit it so we have to enforce it
    id: context.params!.id as string,
  });

  return {
    status: 200,
    props: serverData,
  };
};
