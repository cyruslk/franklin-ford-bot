# coding: utf-8
import tweepy
import time
from random import randint
from corpus_all import sentences


CONSUMER_KEY = '2WFZkmuWSwgPhPPOtaW5pYEch'
CONSUMER_SECRET = 'q7FmeH670qD46KhZ3XgnBFUOXrSjwQP58sWsq4O4CRSObnR30t'
ACCESS_KEY = '841125284468293632-NSUp7z0K4Z3J009D31TRKbv27YFaRAV'
ACCESS_SECRET = '0eHI0ykDkE5lA6RZCziIfxmobl8hd3Va9hnHjJqkSZoBu'
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)
last_tweet_id = api.user_timeline()[0].id


for x, location in sentences:
	if location == "corresp":
		latitude = 40.807536
		longitude = -73.962573
	if location == "doa":
		latitude = 42.279594
		longitude = -83.732124

	# a short amount of time between tweets from the same thread
	short_interval = 10
	# interval betwen new tweets = random number of seconds between 5 hours and 49 hours
	long_interval = randint(18000,176400)
	
	try :
		if len(x) < 140:
			tweet = x
			api.update_status(tweet, lat=latitude, long=longitude)
			time.sleep(long_interval)

		if 140 <= len(x) <= 240:
			words = x.split()
			wordlength = len(words)
			half = wordlength/2
			first_half =  " ".join(words[0:half])
			tweet1 = "%s 1/2" % first_half
			second_half = " ".join(words[half:wordlength])
			tweet2 = "%s 2/2" % second_half
			api.update_status(tweet1, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet2, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(long_interval)


		if 240 <= len(x) <= 360:
			words = x.split()
			wordlength = len(words)
			third = wordlength/3
			first_third =  " ".join(words[0:third])
			tweet1 = "%s 1/3" % first_third
			second_third = " ".join(words[third:third+third])
			tweet2 = "%s 2/3" % second_third
			third_third = " ".join(words[third+third:wordlength])
			tweet3 = "%s (3/3)" % third_third
			api.update_status(tweet1, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet2, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet3, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(long_interval)


		if 360 <= len(x) <= 480:
			words = x.split()
			wordlength = len(words)
			fourth = wordlength/4
			first_fourth =  " ".join(words[0:fourth])
			tweet1 = "%s 1/4" % first_fourth
			second_fourth = " ".join(words[fourth:fourth+fourth])
			tweet2 = "%s 2/4" % second_fourth
			third_fourth = " ".join(words[fourth+fourth:fourth+fourth+fourth])
			tweet3 = "%s (3/4)" % third_fourth
			fourth_fourth = " ".join(words[fourth+fourth+fourth:wordlength])
			tweet4 = "%s (4/4)" % fourth_fourth
			api.update_status(tweet1, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet2, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet3, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(short_interval)
			api.update_status(tweet4, api.user_timeline()[0].id, lat=latitude, long=longitude)
			time.sleep(long_interval)

		else:
			pass

	except Exception, e:
		pass