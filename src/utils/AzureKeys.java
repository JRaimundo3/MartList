package utils;

import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobContainerClientBuilder;
import srv.layers.BlobStorageLayer;

public class AzureKeys {
    private static AzureKeys instance;
    //blobKeys
    private String blobKey;
    private String replicationBlobKey;
    //cosmosKeys
    private String cosmosDbKey;
    private String cosmosDbUrl;
    private String cosmosDB;
    //cacheKeys
    private String redisHostname;
    private String redisKey;
    //cognitiveSearchKeys
    private String searchServiceQueryKey;
    private String searchServiceUrl;
    private String indexName;

    public static AzureKeys getInstance() {

        if (instance != null)
            return instance;

        instance = new AzureKeys();
        return instance;
    }
    public AzureKeys(){
        this.blobKey = "DefaultEndpointsProtocol=https;AccountName=ipm2223;AccountKey=S3QOoV2raXbHwegPqxunRZ6K5D/BEyjz/nVHpWM3shsAe02SELAqYRSgK52D9ydKIM1HUFrfDE9v+AStGso52Q==;EndpointSuffix=core.windows.net";
        this.replicationBlobKey = "";
        //cosmosKeys
        this.cosmosDbKey = "2uL7tYKlWVyn7AXEkJ5GZK9gCgT56CrAR6eS5afNWg5UbR1ktKQtmZ3gBPCu7PrAPWzzltk68uqyACDbqeXD7g==";
        this.cosmosDbUrl = "https://ipm2223.documents.azure.com:443/";
        this.cosmosDB = "ipm2223";
    }


    public String getBlobKey() {
        return blobKey;
    }

    public void setBlobKey(String blobKey) {
        this.blobKey = blobKey;
    }

    public String getReplicationBlobKey() {
        return replicationBlobKey;
    }

    public void setReplicationBlobKey(String replicationBlobKey) {
        this.replicationBlobKey = replicationBlobKey;
    }

    public String getCosmosDbKey() {
        return cosmosDbKey;
    }

    public void setCosmosDbKey(String cosmosDbKey) {
        this.cosmosDbKey = cosmosDbKey;
    }

    public String getCosmosDbUrl() {
        return cosmosDbUrl;
    }

    public void setCosmosDbUrl(String cosmosDbUrl) {
        this.cosmosDbUrl = cosmosDbUrl;
    }

    public String getCosmosDB() {
        return cosmosDB;
    }

    public void setCosmosDB(String cosmosDB) {
        this.cosmosDB = cosmosDB;
    }

    public String getRedisHostname() {
        return redisHostname;
    }

    public void setRedisHostname(String redisHostname) {
        this.redisHostname = redisHostname;
    }

    public String getRedisKey() {
        return redisKey;
    }

    public void setRedisKey(String redisKey) {
        this.redisKey = redisKey;
    }

    public String getSearchServiceQueryKey() {
        return searchServiceQueryKey;
    }

    public void setSearchServiceQueryKey(String searchServiceQueryKey) {
        this.searchServiceQueryKey = searchServiceQueryKey;
    }

    public String getSearchServiceUrl() {
        return searchServiceUrl;
    }

    public void setSearchServiceUrl(String searchServiceUrl) {
        this.searchServiceUrl = searchServiceUrl;
    }

    public String getIndexName() {
        return indexName;
    }

    public void setIndexName(String indexName) {
        this.indexName = indexName;
    }


}
